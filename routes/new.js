var express = require('express');
var router = express.Router();

const messageController = require('../controllers/messageController');

router.get('/', messageController.message_create_get);
router.post('/', messageController.message_create_post);

module.exports = router;
