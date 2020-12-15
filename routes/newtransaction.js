var express = require('express');
var router = express.Router();
// var Transaction = require("../model/transaction");

router.get('/', function(req, res, next) {
  res.render('newtransaction', { title: "Transactions" });
})


module.exports = router;
