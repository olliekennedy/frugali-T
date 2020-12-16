var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router = express.Router();
const ejs = require('ejs');
const port = 3000;
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const passport = require('passport');
require("./config/passport")(passport);

const expressEjsLayout = require('express-ejs-layouts');

// monk connection
var monk = require('monk');
var dbMonk = monk('localhost:27017/frugali_TEA')

// mongoose
mongoose.connect('mongodb://localhost/frugali_TEA', {useNewUrlParser: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
//console.log ("we're connected!")
});

var indexRouter = require('./routes/index');
var transactionRouter = require("./routes/transaction");
var aboutusRouter = require("./routes/aboutus");


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", express.static('./'));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})

// Make our monk db accessible to our router
app.use(function(req, res, next){
  req.dbMonk = dbMonk;
  next();
});

app.use("/", indexRouter);
app.use("/transaction", transactionRouter);
app.use("/about-us", aboutusRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// console.log('test')
app.listen(port, () => {
  console.log(`App listening on: ${port}`);
});

module.exports = app;
