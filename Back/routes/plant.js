var express = require('express');
const { route } = require('.');
var router = express.Router();
var PlantController = require("../controllers/PlantController");




router.get('/list',PlantController.list);
router.delete('/delete' , PlantController.delete);
router.post('/add', PlantController.add);
router.put('/edit', PlantController.edit);



module.exports = router