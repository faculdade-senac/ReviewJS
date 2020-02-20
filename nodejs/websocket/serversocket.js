const ws = require('websocket').server;
const http = require('http');

const socket = new ws({
  httpServer: http.createServer().listen(3000),
});

socket.on('request', (req) => {
  let conn = req.accept(null, req.origin);
  console.log(`Origin : ${req.origin}`);

  conn.on('message', (message) => {
    conn.sendUTF('Hello from server message');
  });

  conn.on('close', (connection) => {
    console.log('Connection closed');
  });
});
