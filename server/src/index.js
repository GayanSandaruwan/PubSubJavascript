import http from 'http'
import express from 'express'
import cors from 'cors'
import WebSocketServer from 'uws'
import PubSub from './pubsub'
// import path from 'path'


const path = require('path');

// Default Server Post
const PORT = 3001

// Create an App
const app = express()
// Create Server
app.server = http.createServer(app)

app.use(cors({
  exposedHeaders: '*',
}))

const wss = new WebSocketServer.Server({
  server: app.server,
})

//Initial PubSub Server
const pubSubServer = new PubSub({wss: wss})
app.pubsub = pubSubServer


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/main.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/main.js'));
});

app.get('/js/addons/datatables.min.js',function(req, res) {
    res.sendFile(path.join(__dirname + '/public/js/addons/datatables.min.js'));
});

app.get('/css/addons/datatables.min.css',function(req, res) {
    res.sendFile(path.join(__dirname + '/css/addons/datatables.min.css'));
});

app.use(express.static('public'))
// Start Server.
app.server.listen(PORT, () => {
  console.log(`App is running on port ${app.server.address().port}`)
})