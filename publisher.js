'use strict';

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost');

client.on('connect', () => {
  setInterval(() => {
    client.publish('my_topic', 'Hello mqtt');
    console.log('Message sent');
  }, 5000);
});
