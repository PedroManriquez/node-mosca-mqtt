'use strict';

const mosca = require('mosca');
const settings = {
  port: 1883
};

const server = new mosca.Server(settings);

server.on('ready', () => {
  console.log('Mosca is Ready !!!!');
});
