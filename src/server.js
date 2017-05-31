
const https = require('https');
const fs    = require('fs');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-crt.pem'),

  rejectUnauthorized: true,
  requestCert: true,
  ca: [ fs.readFileSync('client-crt.pem') ],
};

https.createServer(options, (req, res) => {

  res.writeHead(200);
  res.end('hello world\n');

}).listen(9000, () => console.log('listening on 9000'));