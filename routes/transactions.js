var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('newtransaction', { title: "Enter transactions" });
})

module.exports = router;
