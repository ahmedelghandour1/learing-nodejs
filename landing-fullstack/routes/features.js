const express = require('express');
const home = require('./../data').features;
const router = express.Router();

router.get('/', (req, res) => res.send(home));

module.exports = router;