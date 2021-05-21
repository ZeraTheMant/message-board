
var messages = require('../messages');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
	title: "Mini Messageboard",
	messages: messages
  }
  res.render('index', context);
});

module.exports = router;
