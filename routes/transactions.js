var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('newtransaction', { title: "Transactions" });
})

/* POST to Add Transaction Service */
router.post('/new', function(req, res) {
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var description = req.body.description;
    var category = req.body.category;
    var amount = req.body.amount;

    // Set our collection
    var collection = db.get('transactioncollection');

    // Submit to the DB
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
            res.redirect("newtransaction");
        }
    });

});

module.exports = router;
