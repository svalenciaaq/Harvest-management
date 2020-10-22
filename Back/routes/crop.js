var express = require('express');
const { route } = require('.');
var router = express.Router();
var CropController = require("../controllers/CropController");


router.get('/list',CropController.list);
router.delete('/delete/:id' , CropController.delete);
router.post('/add', CropController.add);
router.put('/edit/:id', CropController.edit);
router.get('/findOne/:id', CropController.findOne);


module.exports = router