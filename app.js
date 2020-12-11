var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();
const ejs = require('ejs');
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/frugali_TEA', {useNewUrlParser: true});

var monk = require('monk');
var dbMonk = monk('localhost:27017/frugali_TEA')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});
app.set('view engine', 'ejs');

app.use("/", express.static('./'));

app.get('/', (req, res) => {
  res.render('index');
})

console.log('test')
app.listen(port, () => {
  console.log(`App listening on: ${port}`);
})
