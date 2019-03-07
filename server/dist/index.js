'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _uws = require('uws');

var _uws2 = _interopRequireDefault(_uws);

var _pubsub = require('./pubsub');

var _pubsub2 = _interopRequireDefault(_pubsub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path'


var path = require('path');

// Default Server Post
var PORT = 3001;

// Create an App
var app = (0, _express2.default)();
// Create Server
app.server = _http2.default.createServer(app);

app.use((0, _cors2.default)({
    exposedHeaders: '*'
}));

var wss = new _uws2.default.Server({
    server: app.server
});

//Initial PubSub Server
var pubSubServer = new _pubsub2.default({ wss: wss });
app.pubsub = pubSubServer;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/main.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/main.js'));
});

app.get('/js/addons/datatables.min.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/js/addons/datatables.min.js'));
});

app.get('/css/addons/datatables.min.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/css/addons/datatables.min.css'));
});

app.use(_express2.default.static('public'));
// Start Server.
app.server.listen(PORT, function () {
    console.log('App is running on port ' + app.server.address().port);
});
//# sourceMappingURL=index.js.map