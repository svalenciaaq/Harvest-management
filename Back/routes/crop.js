var express = require('express');
const { route } = require('.');
var router = express.Router();
var CropController = require("../controllers/CropController");


router.get('/list',CropController.list);
router.delete('/delete' , CropController.delete);
router.post('/add', CropController.add);
router.put('/edit', CropController.edit);



module.exports = router