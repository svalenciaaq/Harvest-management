var express = require('express');
const { route } = require('.');
var router = express.Router();
var PlantationController = require("../controllers/PlantationController");


router.get('/list',PlantationController.list);
router.delete('/delete' ,PlantationController.delete);
router.post('/add',PlantationController.add);
router.put('/edit/:id',PlantationController.edit);
router.get('/findOne/:id', PlantationController.findOne);


module.exports = router