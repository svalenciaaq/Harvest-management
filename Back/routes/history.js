var express = require('express');
const { route } = require('.');
var router = express.Router();
var HistoryController = require("../controllers/HistoryController");




router.get('/list',HistoryController.list);
router.delete('/delete/:id' , HistoryController.delete);
router.post('/add', HistoryController.add);
router.put('/edit/:id', HistoryController.edit);
router.get('/findOne/:id', HistoryController.findOne);



module.exports = router