'use strict';

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost');
client.on('connect', () => {
  client.subscribe('my_topic');
});
client.on('message', (topic, message) => {
  let context = message.toString();
  console.log(context);
});
