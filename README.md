# Twitter Bot

This is a simple Twitter Bot that anyone can install and user

## Getting Started

These instructions will get you up and running

## Prerequisites

To run this project you will need NodeJS installed on your machine

### Installing

Pull down the project and run the following command at the root of the project:

```
npm install
```

This will install all of the node packages you need to run the project. 

Now you must create a twit_config.js file to setup your twitter credentials:

```
module.exports = {
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
}
```

Setup the config.js with your specific time interval and query strings. The following is what comes out of the box:

```
module.exports = {
    query: ["#nodejs", "#javascript", "#reactjs"],
    delay: 1800000
}
```

run the project:

```
node engine.js
```
