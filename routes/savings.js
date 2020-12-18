var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  var db = req.dbMonk;
  var collection = db.get("transaction");
  // var category = "savings";
  collection.find({ category: 'savings' },{},function(e,docs){
    res.render('savings', {
      "savings" : docs
    });
  });
})


module.exports = router;
