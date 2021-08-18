
'use strict';

const express = require('express');
const router = express.Router();

const {
   
    getAllfood,
    createfood,
    getfood,
    updatefood,
    deletefood



} = require('./food-implementations');

router.get('/food', getAllfood);
router.post('/food',createfood);
router.get('/food/:id', getfood);
router.put('/food/:id', updatefood);
router.delete('/food/:id', deletefood);

module.exports = router;