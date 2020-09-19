var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController')

router.get('/test',UsersController.test);

router.get('/list',UsersController.list);



module.exports = router;
