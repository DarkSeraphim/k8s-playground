const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  res.write('Frontend: ' + process.env.HOSTNAME + '\n');
  const breq = http.request({
      hostname: 'project-2-backend.default.svc.cluster.local',
      port: 3000,
      path: '/',
      method: 'POST'
    }, bres => {
    bres.pipe(res); 
  });
  
  req.pipe(breq);
});

server.listen(3000);
