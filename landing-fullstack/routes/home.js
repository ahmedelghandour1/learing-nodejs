const express = require('express');
const home = require('./../data').home;
const router = express.Router();

router.get('/', (req, res) => res.send(home));

module.exports = router;