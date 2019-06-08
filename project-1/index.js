const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('From: ' + process.env.HOSTNAME + '\nMessage: ');
  req.pipe(res);
});

server.listen(3000);
