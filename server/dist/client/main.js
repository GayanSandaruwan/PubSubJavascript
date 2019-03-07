'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 2);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   * 
   * @providesModule EmitterSubscription
   * @typechecks
   */

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var EventSubscription = __webpack_require__(6);

  /**
   * EmitterSubscription represents a subscription with listener and context data.
   */

  var EmitterSubscription = function (_EventSubscription) {
    _inherits(EmitterSubscription, _EventSubscription);

    /**
     * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
     *   this subscription
     * @param {function} listener - Function to invoke when the specified event is
     *   emitted
     * @param {*} context - Optional context object to use when invoking the
     *   listener
     */

    function EmitterSubscription(subscriber, listener, context) {
      _classCallCheck(this, EmitterSubscription);

      _EventSubscription.call(this, subscriber);
      this.listener = listener;
      this.context = context;
    }

    return EmitterSubscription;
  }(EventSubscription);

  module.exports = EmitterSubscription;

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var validateFormat = function validateFormat(format) {};

  if (false) {}

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  module.exports = invariant;

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  module.exports = __webpack_require__(3);

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _fbemitter = __webpack_require__(4);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PubSubClient = function () {
    function PubSubClient(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { connect: true, reconnect: true };
      var cb = arguments[2];

      _classCallCheck(this, PubSubClient);

      // Binding
      this.reconnect = this.reconnect.bind(this);
      this.connect = this.connect.bind(this);
      this.runSubscriptionQueue = this.runSubscriptionQueue.bind(this);
      this.runQueue = this.runQueue.bind(this);

      this.unsubscribe = this.unsubscribe.bind(this);
      this.subscribe = this.subscribe.bind(this);
      this.publish = this.publish.bind(this);

      // status of client connection
      this.emitter = new _fbemitter.EventEmitter();
      this._connected = false;
      this._ws = null;
      this._queue = [];
      this._id = null;

      // store listeners
      this._listeners = [];

      //All subscriptions
      this._subscriptions = [];

      this._allMessageQueue = [];
      // store settings

      this._isReconnecting = false;

      this._url = url;
      this._options = options;

      if (this._options && this._options.connect) {
        // auto connect
        this.connect(cb);
      }
    }

    /**
     * Un Subscribe a topic, no longer receive new message of the topic
     * @param topic
     */

    _createClass(PubSubClient, [{
      key: 'unsubscribe',
      value: function unsubscribe(topic) {

        var subscription = this._subscriptions.find(function (sub) {
          return sub.topic === topic;
        });

        if (subscription && subscription.listener) {
          // first need to remove local listener
          subscription.listener.remove();
        }

        // need to tell to the server side that i dont want to receive message from this topic
        this.send({
          action: 'unsubscribe',
          payload: {
            topic: topic
          }
        });
      }

      /**
       * Subscribe client to a topic
       * @param topic
       * @param cb
       */

    }, {
      key: 'subscribe',
      value: function subscribe(topic, cb) {

        var listener = this.emitter.addListener('subscribe_topic_' + topic, cb);
        // add listener to array
        this._listeners.push(listener);

        // send server with message

        this.send({
          action: 'subscribe',
          payload: {
            topic: topic
          }
        });

        // let store this into subscriptions for later when use reconnect and we need to run queque to subscribe again
        this._subscriptions.push({
          topic: topic,
          callback: cb ? cb : null,
          listener: listener
        });
      }

      /**
       * Publish a message to topic, send to everyone and me
       * @param topic
       * @param message
       */

    }, {
      key: 'publish',
      value: function publish(topic, message) {

        this.send({
          action: 'publish',
          payload: {
            topic: topic,
            message: message
          }
        });
      }

      /**
       * Publish a message to the topic and send to everyone, not me
       * @param topic
       * @param message
       */

    }, {
      key: 'broadcast',
      value: function broadcast(topic, message) {

        this.send({
          action: 'broadcast',
          payload: {
            topic: topic,
            message: message
          }
        });
      }

      /**
       * Return client conneciton ID
       */

    }, {
      key: 'id',
      value: function id() {
        return this._id;
      }

      /**
       * Convert string to JSON
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
       * Send a message to the server
       * @param message
       */

    }, {
      key: 'send',
      value: function send(message) {
        if (this._connected === true && this._ws.readyState === 1) {
          message = JSON.stringify(message);
          this._ws.send(message);
        } else {
          // let keep it in queue
          this._queue.push({
            type: 'message',
            payload: message
          });
        }
      }

      /**
       * Run Queue after connecting successful
       */

    }, {
      key: 'runQueue',
      value: function runQueue() {
        var _this = this;

        if (this._queue.length) {
          this._queue.forEach(function (q, index) {
            switch (q.type) {

              case 'message':
                _this.send(q.payload);

                break;

              default:

                break;
            }

            // remove queue

            delete _this._queue[index];
          });
        }
      }

      /**
       * Let auto subscribe again
       */

    }, {
      key: 'runSubscriptionQueue',
      value: function runSubscriptionQueue() {
        var _this2 = this;

        if (this._subscriptions.length) {
          this._subscriptions.forEach(function (subscription) {
            _this2.send({
              action: 'subscribe',
              payload: {
                topic: subscription.topic
              }
            });
          });
        }
      }

      /**
       * Implement reconnect
       */

    }, {
      key: 'reconnect',
      value: function reconnect(cb) {
        var _this3 = this;

        // if is reconnecting so do nothing
        if (this._isReconnecting || this._connected) {
          console.log("isReconnecting : " + this._isReconnecting + " connected : " + this._connected);
          return;
        }
        // Set timeout
        this._isReconnecting = true;
        this._reconnectTimeout = setTimeout(function () {
          console.log('Reconnecting....');
          _this3.connect(cb);
        }, 2000);
      }

      /**
       * Begin connect to the server
       * @param cb
       */

    }, {
      key: 'connect',
      value: function connect(cb) {
        var _this4 = this;

        var ws = new WebSocket(this._url);
        this._ws = ws;

        // clear timeout of reconnect
        if (this._reconnectTimeout) {
          clearTimeout(this._reconnectTimeout);
        }

        ws.onopen = function () {

          // change status of connected
          _this4._connected = true;
          _this4._isReconnecting = false;

          console.log('Connected to the server');
          _this4.send({ action: 'me' });
          // run queue
          _this4.runQueue();

          _this4.runSubscriptionQueue();

          // Sending old messages

          setTimeout(function () {
            if (cb) {
              cb(_this4._allMessageQueue);
            } else {
              console.log(" Callback function not defined " + cb);
            }
          }, 1000);
        };
        // listen a message from the server
        ws.onmessage = function (message) {

          var jsonMessage = _this4.stringToJson(message.data);

          var action = jsonMessage.action;
          var payload = jsonMessage.payload;

          switch (action) {

            case 'me':

              _this4._id = payload.id;

              break;

            case 'publish':

              _this4.emitter.emit('subscribe_topic_' + payload.topic, payload.message);
              // let emit this to subscribers
              break;
            case 'history':
              // console.log("history"+payload);
              _this4._allMessageQueue = payload.message;

            default:

              break;
          }
        };
        ws.onerror = function (err) {

          console.log('unable connect to the server', err);

          _this4._connected = false;
          _this4._isReconnecting = false;
          _this4.reconnect();
        };
        ws.onclose = function () {

          console.log('Connection is closed');

          _this4._connected = false;
          _this4._isReconnecting = false;
          _this4.reconnect();
        };
      }

      /**
       * Disconnect client
       */

    }, {
      key: 'disconnect',
      value: function disconnect() {

        if (this._listeners.length) {
          this._listeners.forEach(function (listener) {

            listener.remove();
          });
        }
        this._connected = false;
      }
    }]);

    return PubSubClient;
  }();

  // window.onload = () => {

  //   const pubSub = new PubSubClient('ws://localhost:3001', {
  //     connect: true,
  //     reconnect: true,
  //   })

  //   const topicName = 'abc'

  //   pubSub.subscribe(topicName, (message) => {
  //     console.log(`Got message from topic ${topicName}`, message)
  //   })

  //   //publish a message to topic
  //   pubSub.publish(topicName,
  //     {title: 'Hello subscribers in the topic abc', body: 'How are you ?'})

  //   // Broadcast send message to subscribers but not me
  //   pubSub.broadcast(topicName, {body: 'this is broadcast message'})

  //   // Make global for console access


  exports.default = PubSubClient;
  window.PubSubClient = PubSubClient;

  // }

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  var fbemitter = {
    EventEmitter: __webpack_require__(5),
    EmitterSubscription: __webpack_require__(0)
  };

  module.exports = fbemitter;

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule BaseEventEmitter
   * @typechecks
   */

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var EmitterSubscription = __webpack_require__(0);
  var EventSubscriptionVendor = __webpack_require__(7);

  var emptyFunction = __webpack_require__(8);
  var invariant = __webpack_require__(1);

  /**
   * @class BaseEventEmitter
   * @description
   * An EventEmitter is responsible for managing a set of listeners and publishing
   * events to them when it is told that such events happened. In addition to the
   * data for the given event it also sends a event control object which allows
   * the listeners/handlers to prevent the default behavior of the given event.
   *
   * The emitter is designed to be generic enough to support all the different
   * contexts in which one might want to emit events. It is a simple multicast
   * mechanism on top of which extra functionality can be composed. For example, a
   * more advanced emitter may use an EventHolder and EventFactory.
   */

  var BaseEventEmitter = function () {
    /**
     * @constructor
     */

    function BaseEventEmitter() {
      _classCallCheck(this, BaseEventEmitter);

      this._subscriber = new EventSubscriptionVendor();
      this._currentSubscription = null;
    }

    /**
     * Adds a listener to be invoked when events of the specified type are
     * emitted. An optional calling context may be provided. The data arguments
     * emitted will be passed to the listener function.
     *
     * TODO: Annotate the listener arg's type. This is tricky because listeners
     *       can be invoked with varargs.
     *
     * @param {string} eventType - Name of the event to listen to
     * @param {function} listener - Function to invoke when the specified event is
     *   emitted
     * @param {*} context - Optional context object to use when invoking the
     *   listener
     */

    BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
      return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
    };

    /**
     * Similar to addListener, except that the listener is removed after it is
     * invoked once.
     *
     * @param {string} eventType - Name of the event to listen to
     * @param {function} listener - Function to invoke only once when the
     *   specified event is emitted
     * @param {*} context - Optional context object to use when invoking the
     *   listener
     */

    BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
      var emitter = this;
      return this.addListener(eventType, function () {
        emitter.removeCurrentListener();
        listener.apply(context, arguments);
      });
    };

    /**
     * Removes all of the registered listeners, including those registered as
     * listener maps.
     *
     * @param {?string} eventType - Optional name of the event whose registered
     *   listeners to remove
     */

    BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
      this._subscriber.removeAllSubscriptions(eventType);
    };

    /**
     * Provides an API that can be called during an eventing cycle to remove the
     * last listener that was invoked. This allows a developer to provide an event
     * object that can remove the listener (or listener map) during the
     * invocation.
     *
     * If it is called when not inside of an emitting cycle it will throw.
     *
     * @throws {Error} When called not during an eventing cycle
     *
     * @example
     *   var subscription = emitter.addListenerMap({
     *     someEvent: function(data, event) {
     *       console.log(data);
     *       emitter.removeCurrentListener();
     *     }
     *   });
     *
     *   emitter.emit('someEvent', 'abc'); // logs 'abc'
     *   emitter.emit('someEvent', 'def'); // does not log anything
     */

    BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
      !!!this._currentSubscription ? false ? undefined : invariant(false) : undefined;
      this._subscriber.removeSubscription(this._currentSubscription);
    };

    /**
     * Returns an array of listeners that are currently registered for the given
     * event.
     *
     * @param {string} eventType - Name of the event to query
     * @return {array}
     */

    BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
      var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
      return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
        return subscription.listener;
      }) : [];
    };

    /**
     * Emits an event of the given type with the given data. All handlers of that
     * particular type will be notified.
     *
     * @param {string} eventType - Name of the event to emit
     * @param {*} Arbitrary arguments to be passed to each registered listener
     *
     * @example
     *   emitter.addListener('someEvent', function(message) {
     *     console.log(message);
     *   });
     *
     *   emitter.emit('someEvent', 'abc'); // logs 'abc'
     */

    BaseEventEmitter.prototype.emit = function emit(eventType) {
      var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
      if (subscriptions) {
        var keys = Object.keys(subscriptions);
        for (var ii = 0; ii < keys.length; ii++) {
          var key = keys[ii];
          var subscription = subscriptions[key];
          // The subscription may have been removed during this event loop.
          if (subscription) {
            this._currentSubscription = subscription;
            this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
          }
        }
        this._currentSubscription = null;
      }
    };

    /**
     * Provides a hook to override how the emitter emits an event to a specific
     * subscription. This allows you to set up logging and error boundaries
     * specific to your environment.
     *
     * @param {EmitterSubscription} subscription
     * @param {string} eventType
     * @param {*} Arbitrary arguments to be passed to each registered listener
     */

    BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
      var args = Array.prototype.slice.call(arguments, 2);
      subscription.listener.apply(subscription.context, args);
    };

    return BaseEventEmitter;
  }();

  module.exports = BaseEventEmitter;

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule EventSubscription
   * @typechecks
   */

  /**
   * EventSubscription represents a subscription to a particular event. It can
   * remove its own subscription.
   */

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var EventSubscription = function () {

    /**
     * @param {EventSubscriptionVendor} subscriber the subscriber that controls
     *   this subscription.
     */

    function EventSubscription(subscriber) {
      _classCallCheck(this, EventSubscription);

      this.subscriber = subscriber;
    }

    /**
     * Removes this subscription from the subscriber that controls it.
     */

    EventSubscription.prototype.remove = function remove() {
      if (this.subscriber) {
        this.subscriber.removeSubscription(this);
        this.subscriber = null;
      }
    };

    return EventSubscription;
  }();

  module.exports = EventSubscription;

  /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   * 
   * @providesModule EventSubscriptionVendor
   * @typechecks
   */

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var invariant = __webpack_require__(1);

  /**
   * EventSubscriptionVendor stores a set of EventSubscriptions that are
   * subscribed to a particular event type.
   */

  var EventSubscriptionVendor = function () {
    function EventSubscriptionVendor() {
      _classCallCheck(this, EventSubscriptionVendor);

      this._subscriptionsForType = {};
      this._currentSubscription = null;
    }

    /**
     * Adds a subscription keyed by an event type.
     *
     * @param {string} eventType
     * @param {EventSubscription} subscription
     */

    EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
      !(subscription.subscriber === this) ? false ? undefined : invariant(false) : undefined;
      if (!this._subscriptionsForType[eventType]) {
        this._subscriptionsForType[eventType] = [];
      }
      var key = this._subscriptionsForType[eventType].length;
      this._subscriptionsForType[eventType].push(subscription);
      subscription.eventType = eventType;
      subscription.key = key;
      return subscription;
    };

    /**
     * Removes a bulk set of the subscriptions.
     *
     * @param {?string} eventType - Optional name of the event type whose
     *   registered supscriptions to remove, if null remove all subscriptions.
     */

    EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
      if (eventType === undefined) {
        this._subscriptionsForType = {};
      } else {
        delete this._subscriptionsForType[eventType];
      }
    };

    /**
     * Removes a specific subscription. Instead of calling this function, call
     * `subscription.remove()` directly.
     *
     * @param {object} subscription
     */

    EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
      var eventType = subscription.eventType;
      var key = subscription.key;

      var subscriptionsForType = this._subscriptionsForType[eventType];
      if (subscriptionsForType) {
        delete subscriptionsForType[key];
      }
    };

    /**
     * Returns the array of subscriptions that are currently registered for the
     * given event type.
     *
     * Note: This array can be potentially sparse as subscriptions are deleted
     * from it when they are removed.
     *
     * TODO: This returns a nullable array. wat?
     *
     * @param {string} eventType
     * @return {?array}
     */

    EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
      return this._subscriptionsForType[eventType];
    };

    return EventSubscriptionVendor;
  }();

  module.exports = EventSubscriptionVendor;

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  module.exports = emptyFunction;

  /***/
}]
/******/);
//# sourceMappingURL=main.js.map