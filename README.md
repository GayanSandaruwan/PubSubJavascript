# PubSubJavascript

How to install

1. ``clone`` or download the repository
2. change directory to server
3. add dependencies via ``npm install``
4. start server by ``npm run dev``
5. open your browser and goto ``localhost:3001/``
6. Try sending messages

Script for the client is located in client directory. To build the index.js (writtent in ES6) to support modern browsers
1. change directory to client ``cd client``
2. install dependencies by ``npm install``
3. ``npm run build``
4. got folder ``dist`` and find the build as ``main.js``


#TODO
1. Old messages don't load at once. Need to disconnect and reconnect again. An error in the buffering cause this.
