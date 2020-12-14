var express = require('express');
var router = express.Router();
var Transaction = require("../model/transaction");

router.get('/', function(req, res, next) {
  res.render('newtransaction', { title: "Transactions" });
})

// router.post('/new', function(req, res) {
//   var db = req.db;
//   console.log(db)
//
//   var description = req.body.description;
//   var category = req.body.category;
//   var amount = req.body.amount;
//
//   var collection = db.get('transactioncollection');
//
//   collection.insert({
//       "description" : description,
//       "category" : category,
//       "amount" : amount
//   }, function (err, doc) {
//       if (err) {
//           // If it failed, return error
//           res.send("There was a problem adding the information to the database.");
//       }
//       else {
//           // And forward to success page
//           res.redirect("newtransaction");
//       }
//   });
//   res.redirect("/list")
// });

router.get('/list', function(req, res) {
  var db = req.db;
  var collection = db.get("transaction");
  collection.find({},{},function(e,docs){
      res.render('transactionlist', {
          "transactions" : docs
      });
  });
  // res.render('transactionlist', {
  //     "transactions" : collection.find({})
  // });
})

module.exports = router;
