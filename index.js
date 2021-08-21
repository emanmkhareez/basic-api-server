'use strict';



const { db } = require('./src/models/index.js');
const server = require('./src/server');
//the port should be from the .evn file
db.sync()
    .then(() => {
        server.start(3000);
    })
    .catch(console.error);



