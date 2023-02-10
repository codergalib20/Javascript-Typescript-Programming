const http = require('http');

const server = http.createServer((request, response) => {
  response.write('hello there!');
  response.end();
});

server.listen(3000);