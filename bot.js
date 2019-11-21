const twit = require('twit');
const config = require('./twit_config');

const Twitter = new twit(config);

const searchTweets = async (queryArray) => {
    const querys = queryArray.join(', ');
    const params = { q: querys, result_type: 'recent', lang: 'en' }

    try {
        const res = await Twitter.get('search/tweets', params);
        return res.data.statuses;
    } catch (error) {
        console.error(error.message);
    }
}

const randomRetweet = async (queryArray) => {
    try {
        const tweets = await searchTweets(queryArray);

        const randomIndex = Math.floor(Math.random() * tweets.length);

        const tweet = tweets[randomIndex];
        const tweetId = tweet.id_str;

        await Twitter.post(`statuses/retweet/:id`, { id: tweetId });
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { randomRetweet }
