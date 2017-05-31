#!/bin/bash

openssl req -x509 -days 365 -nodes -sha256 -newkey rsa:4096 -subj "/C=US/CN=127.0.0.1" -keyout server-key.pem -out server-crt.pem
openssl req -x509 -days 365 -nodes -sha256 -newkey rsa:4096 -subj "/C=US" -keyout client-key.pem -out client-crt.pem

# validate with:
# openssl x509 -noout -text -in server-crt.pem
# openssl x509 -noout -text -in client-crt.pem