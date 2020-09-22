var express = require('express');
var router = express.Router();
var Plant = require('../model/Plant');
/* GET home page. */


router.get('/', async (req, res) => {
  const tasks = await Plant.find();
  res.render('index', { title:
    tasks
  });
});

router.post('/add', async (req, res, next) => {
  const task = new Plant(req.body);
  await task.save();
  res.redirect('/');
});


module.exports = router;
