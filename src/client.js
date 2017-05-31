
const https = require('https');
const fs    = require('fs');

const options = {
  hostname: '127.0.0.1',
  port: 9000,
  path: '/',
  method: 'GET',

  rejectUnauthorized: true,
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-crt.pem'),
  ca: fs.readFileSync('server-crt.pem'),

  // To allow connection via IP's
  // https://github.com/nodejs/node/blob/v7.10.0/lib/tls.js
  // https://stackoverflow.com/questions/33558076/cannot-use-ip-in-node-js-for-self-signed-certificate
  checkServerIdentity: (servername, crt) => {
    if(servername !== crt.subject.CN) {
      throw new Error(`Servername ${servername} does not match CN ${crt.subject.CN}`);
    }
  }
};

const req = https.request(options, (res) => {
  res.on('data', (d) => process.stdout.write(d));
});

req.on('error', (e) => console.error(e))

req.end();