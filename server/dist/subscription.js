'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = require('immutable');

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subscription = function () {
  function Subscription() {
    _classCallCheck(this, Subscription);

    this.subscriptions = new _immutable.Map();
  }

  /**
   * Return subsciption
   * @param id
   */


  _createClass(Subscription, [{
    key: 'get',
    value: function get(id) {
      return this.subscriptions.get(id);
    }

    /**
     * Add new subscription
     * @param topic
     * @param clientId
     * @param type
     * @returns {*}
     */

  }, {
    key: 'add',
    value: function add(topic, clientId) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ws';


      // need to find subscription with same type = 'ws'

      var findSubscriptionWithClientId = this.subscriptions.find(function (sub) {
        return sub.clientId === clientId && sub.type === type && sub.topic === topic;
      });

      if (findSubscriptionWithClientId) {
        // exist and no need add more subscription
        return findSubscriptionWithClientId.id;
      }
      var id = this.autoId();
      var subscription = {
        id: id,
        topic: topic,
        clientId: clientId,
        type: type // email, phone
      };

      console.log('New subscriber via add method:', subscription);
      this.subscriptions = this.subscriptions.set(id, subscription);
      return id;
    }

    /**
     * Remove a subsciption
     * @param id
     */

  }, {
    key: 'remove',
    value: function remove(id) {

      this.subscriptions = this.subscriptions.remove(id);
    }

    /**
     * Clear all subscription
     */

  }, {
    key: 'clear',
    value: function clear() {

      this.subscriptions = this.subscriptions.clear();
    }

    /**
     * Get Subscriptions
     * @param predicate
     * @returns {any}
     */

  }, {
    key: 'getSubscriptions',
    value: function getSubscriptions() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return predicate ? this.subscriptions.filter(predicate) : this.subscriptions;
    }

    /**
     * Generate new ID
     * @returns {*}
     */

  }, {
    key: 'autoId',
    value: function autoId() {
      return (0, _v2.default)();
    }
  }]);

  return Subscription;
}();

exports.default = Subscription;
//# sourceMappingURL=subscription.js.map