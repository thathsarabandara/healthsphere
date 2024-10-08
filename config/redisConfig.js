const redis = require('redis');

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379,
});

client.connect()
    .then(() => console.log('Connected to Redis'))
    .catch((err) => console.error('Error connecting to Redis:', err));

module.exports = client;