  
'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./src/error-handlers/404');
const errorHandler = require('./src/error-handlers/500');
const loggerMeddleware = require('./src/middleware/logger');

const clothesRoute = require('./src/routes/clothes');

const foodRouts = require('./src/routes/clothes');

app.use(express.json());
app.use(loggerMeddleware);
app.use(clothesRoute);
app.use(foodRouts);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}