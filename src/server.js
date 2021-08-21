  
'use strict';

const express = require('express');
const app = express();
app.use(express.json())
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerMeddleware = require('./middleware/logger');

const clothesRoute = require('./routes/clothes');

const foodRouts = require('./routes/food');


app.use(express.json());
app.use(loggerMeddleware);
app.use(clothesRoute);
app.use(foodRouts)

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}