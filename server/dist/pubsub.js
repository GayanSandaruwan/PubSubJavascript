'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = require('immutable');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

var _subscription = require('./subscription');

var _subscription2 = _interopRequireDefault(_subscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var messageDict = {};

var PubSub = function () {
  function PubSub(ctx) {
    _classCallCheck(this, PubSub);

    this.wss = ctx.wss;

    this.clients = new _immutable.Map();
    this.subscription = new _subscription2.default();

    this.load = this.load.bind(this);
    this.handleReceivedClientMessage = this.handleReceivedClientMessage.bind(this);
    this.handleAddSubscription = this.handleAddSubscription.bind(this);
    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
    this.handlePublishMessage = this.handlePublishMessage.bind(this);
    this.removeClient = this.removeClient.bind(this);

    this.load();
  }

  _createClass(PubSub, [{
    key: 'load',
    value: function load() {
      var _this = this;

      var wss = this.wss;

      wss.on('connection', function (ws) {

        var id = _this.autoId();

        var client = {
          id: id,
          ws: ws,
          userId: null,
          subscriptions: []

          // add new client to the map
        };_this.addClient(client);
        console.log("Message Dict Send by server : ", messageDict);
        _this.send(client.id, {
          action: 'history',
          payload: {
            message: messageDict
          }
        });
        // listen when receive message from client
        ws.on('message', function (message) {
          _this.handleReceivedClientMessage(id, message);
          // console.log("aaaaaaaaaaa"+message);

          var messagej = JSON.parse(message);
          if (messagej.action == "publish" || messagej.action == "broadcast") {
            messageDict[messagej.payload.topic] = messagej.payload.message.body;
            console.log("Message Dictionary : ", messageDict);
          }
        });

        ws.on('close', function () {
          console.log('Client is disconnected');
          // Find user subscriptions and remove
          var userSubscriptions = _this.subscription.getSubscriptions(function (sub) {
            return sub.clientId === id;
          });
          userSubscriptions.forEach(function (sub) {
            _this.subscription.remove(sub.id);
          });

          // now let remove client

          _this.removeClient(id);
        });
      });
    }

    /**
     * Handle add subscription
     * @param topic
     * @param clientId = subscriber
     */

  }, {
    key: 'handleAddSubscription',
    value: function handleAddSubscription(topic, clientId) {

      var client = this.getClient(clientId);
      if (client) {
        var subscriptionId = this.subscription.add(topic, clientId);
        client.subscriptions.push(subscriptionId);
        this.addClient(client);
      }
    }

    /**
     * Handle unsubscribe topic
     * @param topic
     * @param clientId
     */

  }, {
    key: 'handleUnsubscribe',
    value: function handleUnsubscribe(topic, clientId) {
      var _this2 = this;

      var client = this.getClient(clientId);

      var clientSubscriptions = _lodash2.default.get(client, 'subscriptions', []);

      var userSubscriptions = this.subscription.getSubscriptions(function (s) {
        return s.clientId === clientId && s.type === 'ws';
      });

      userSubscriptions.forEach(function (sub) {

        clientSubscriptions = clientSubscriptions.filter(function (id) {
          return id !== sub.id;
        });

        // now let remove subscriptions
        _this2.subscription.remove(sub.id);
      });

      // let update client subscriptions
      if (client) {
        client.subscriptions = clientSubscriptions;
        this.addClient(client);
      }
    }

    /**
     * Handle publish a message to a topic
     * @param topic
     * @param message
     * @param from
     * @isBroadcast = false that mean send all, if true, send all not me
     */

  }, {
    key: 'handlePublishMessage',
    value: function handlePublishMessage(topic, message, from) {
      var _this3 = this;

      var isBroadcast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


      var subscriptions = isBroadcast ? this.subscription.getSubscriptions(function (sub) {
        return sub.topic === topic && sub.clientId !== from;
      }) : this.subscription.getSubscriptions(function (subs) {
        return subs.topic === topic;
      });
      // now let send to all subscribers in the topic with exactly message from publisher
      subscriptions.forEach(function (subscription) {

        var clientId = subscription.clientId;
        var subscriptionType = subscription.type; // email, phone, ....
        console.log('CLient id of subscription', clientId, subscription);
        // we are only handle send via websocket
        if (subscriptionType === 'ws') {
          _this3.send(clientId, {
            action: 'publish',
            payload: {
              topic: topic,
              message: message
            }
          });
        }
      });
    }

    /**
     * Handle receive client message
     * @param clientId
     * @param message
     */

  }, {
    key: 'handleReceivedClientMessage',
    value: function handleReceivedClientMessage(clientId, message) {

      var client = this.getClient(clientId);

      if (typeof message === 'string') {

        message = this.stringToJson(message);

        var action = _lodash2.default.get(message, 'action', '');
        switch (action) {

          case 'me':

            //Client is asking for his info

            this.send(clientId, { action: 'me', payload: { id: clientId, userId: client.userId } });

            break;

          case 'subscribe':

            //@todo handle add this subscriber
            var topic = _lodash2.default.get(message, 'payload.topic', null);
            if (topic) {
              this.handleAddSubscription(topic, clientId);
            }

            break;

          case 'unsubscribe':

            var unsubscribeTopic = _lodash2.default.get(message, 'payload.topic');
            if (unsubscribeTopic) {

              this.handleUnsubscribe(unsubscribeTopic, clientId);
            }

            break;

          case 'publish':

            var publishTopic = _lodash2.default.get(message, 'payload.topic', null);
            var publishMessage = _lodash2.default.get(message, 'payload.message');
            if (publishTopic) {
              var from = clientId;
              this.handlePublishMessage(publishTopic, publishMessage, from);
            }

            break;

          case 'broadcast':

            var broadcastTopicName = _lodash2.default.get(message, 'payload.topic', null);
            var broadcastMessage = _lodash2.default.get(message, 'payload.message');
            if (broadcastTopicName) {
              this.handlePublishMessage(broadcastTopicName, broadcastMessage, clientId, true);
            }

            break;

          default:

            break;
        }
      } else {
        // maybe data message we handle later.
      }
    }

    /**
     * Convert string of message to JSON
     * @param message
     * @returns {*}
     */

  }, {
    key: 'stringToJson',
    value: function stringToJson(message) {

      try {
        message = JSON.parse(message);
      } catch (e) {
        console.log(e);
      }

      return message;
    }

    /**
     * Add new client connection to the map
     * @param client
     */

  }, {
    key: 'addClient',
    value: function addClient(client) {

      if (!client.id) {
        client.id = this.autoId();
      }
      this.clients = this.clients.set(client.id, client);
    }

    /**
     * Remove a client after disconnecting
     * @param id
     */

  }, {
    key: 'removeClient',
    value: function removeClient(id) {
      this.clients = this.clients.remove(id);
    }

    /**
     * Get a client connection
     * @param id
     * @returns {V | undefined}
     */

  }, {
    key: 'getClient',
    value: function getClient(id) {

      return this.clients.get(id);
    }

    /**
     * Generate an ID
     * @returns {*}
     */

  }, {
    key: 'autoId',
    value: function autoId() {
      return (0, _v2.default)();
    }

    /**
     * Send to client message
     * @param message
     */

  }, {
    key: 'send',
    value: function send(clientId, message) {

      var client = this.getClient(clientId);
      if (!client) {
        return;
      }
      var ws = client.ws;
      try {
        message = JSON.stringify(message);
      } catch (err) {
        console.log('An error convert object message to string', err);
      }

      ws.send(message);
    }
  }]);

  return PubSub;
}();

exports.default = PubSub;
//# sourceMappingURL=pubsub.js.map