var express = require('express');
var router = express.Router();
// var Transaction = require("../model/transaction");

router.get('/', function(req, res) {
  var category = req.query.category;
  console.log(category)
  var db = req.dbMonk;
  var collection = db.get("transaction");
  if (category === "all" || category === undefined) {
    collection.find({},{},function(e,docs){
      res.render('transaction', {
        "transactions" : docs,
        title: "Transactions"
      });
    });
  } else {
    collection.find({ category: category },{},function(e,docs){
      res.render('transaction', {
        "transactions" : docs,
        title: "Transactions"
      });
    });
  }
})

router.post('/', function(req, res) {
  var db = req.dbMonk;

  var description = req.body.description;
  var category = req.body.category;
  var amount = req.body.amount;

  var collection = db.get('transaction');

  collection.insert({
      "description" : description,
      "category" : category,
      "amount" : amount
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.redirect('/transaction')
      }
  });
});

module.exports = router;
