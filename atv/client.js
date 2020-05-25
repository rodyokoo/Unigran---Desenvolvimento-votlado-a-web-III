const webSocket = require('ws');

const client = new webSocket('ws://localhost:8080');

client.on('open', function open() {
  client.send('something');
});
