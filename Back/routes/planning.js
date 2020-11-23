var express = require('express');
var router = express.Router();
var PlanningController = require("../controllers/PlanningController");


router.get('/list/:id',PlanningController.list);
router.delete('/delete/:id' ,PlanningController.delete);
router.post('/add',PlanningController.add);
router.put('/edit/:id',PlanningController.edit);
router.get('/findOne/:id', PlanningController.findOne);


module.exports = router