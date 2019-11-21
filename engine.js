const { randomRetweet } = require('./bot');
const config = require('./config');

setInterval(() => {
    randomRetweet(config.query);
    console.log('tweet sent');
}, config.delay);
