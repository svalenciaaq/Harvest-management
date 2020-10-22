var express = require('express');
const { route } = require('.');
var router = express.Router();
var PlantController = require("../controllers/PlantController");




router.get('/list',PlantController.list);
router.delete('/delete/:id' , PlantController.delete);
router.post('/add', PlantController.add);
router.put('/edit/:id', PlantController.edit);
router.get('/findOne/:id', PlantController.findOne);



module.exports = router