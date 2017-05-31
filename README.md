# node-tls
A simple test for TLS usage with client and server certificates.

To test:
1. run `./scripts.sh` to generate the certs using OpenSSL
2. run `node src/server` to start the server
3. run `node src/client` to connect to the server using the client cert

This will output:
```
hello world
```

You can test that it requires the client cert by using curl:
```
$ curl -k https://127.0.0.1:9000
curl: (35) SSL peer handshake failed, the server most likely requires a client certificate to connect
```
