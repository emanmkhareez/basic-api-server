  
'use strict';

const express = require('express');
const app = express();
app.use(express.json())
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerMeddleware = require('./src/middleware/logger');

const clothesRoute = require('./src/routes/clothes');

const foodRouts = require('./routes/food-implementations');

app.use(express.json());
app.use(loggerMeddleware);
app.use(clothesRoute);


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}