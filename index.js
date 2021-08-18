'use strict';

const server = require('./server');

const { db } = require('./src/models/index.js');
//the port should be from the .evn file
db.sync()
    .then(() => {
        server.start(3000);
    })
    .catch(console.error);