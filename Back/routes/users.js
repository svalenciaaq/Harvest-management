var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController')


router.post('/add', UsersController.add);
router.get('/list', UsersController.list);

module.exports = router;
