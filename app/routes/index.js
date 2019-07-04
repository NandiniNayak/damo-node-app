var express = require('express');
var welcometime = require('../welcometime');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', currentTime: welcometime.getCurrentTime() });
});

module.exports = router;
