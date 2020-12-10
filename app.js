const express = require('express');
const app = express();
const ejs = require('ejs');
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/frugali_TEA', {useNewUrlParser: true});
//var MongoClient = require('mongodb').MongoClient
const db = mongoose.connection
//MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
//collection.insert({ id: 1,"Bills" : 100, "Groceries" : 250, "Travel" : 150, "Loans" : 70, "Hobbies" : 80, "Tea" : 50, "Savings" : 400, "Entertainment" : 30});
//});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
//console.log ("we're connected!")
});
app.set('view engine', 'ejs');

// app.configure(function(){

// });
app.use("/", express.static('./'));

app.get('/', (req, res) => {
  res.render('index');
})

console.log('test')
app.listen(port, () => {
  console.log(`App listening on: ${port}`);
})
