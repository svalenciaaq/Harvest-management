var express = require('express');
const { route } = require('.');
var router = express.Router();
var PlantationController = require("../controllersPlantationController");


router.get('/list',PlantationController.list);
router.delete('/delete' ,PlantationController.delete);
router.post('/add',PlantationController.add);
router.put('/edit',PlantationController.edit);



module.exports = router