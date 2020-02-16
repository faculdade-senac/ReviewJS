// app.js
const http = require('http');
const handle = require('./handle');

const server = http.createServer(handle);

server.listen(3000, () => {
  console.log('Server Running');
});
