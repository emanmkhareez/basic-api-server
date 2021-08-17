

'use strict';

const express = require('express');
const router = express.Router();

const {
   
    getAllclothes,
    createclothes,
    getclothes,
 updateclothes,
   deleteclothes



} = require('./clothes-implementations');

router.get('/clothes', getAllclothes);
router.post('/clothes',createclothes);
router.get('/clothes/:id', getclothes);
router.put('/clothes/:id', updateclothes);
router.delete('/clothes/:id', deleteclothes);

module.exports = router;