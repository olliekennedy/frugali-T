const express = require('express');
const router = express.Router();
const app = express();
const ejs = require('ejs');
const port = 3000;
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const passport = require('passport');
require("./config/passport")(passport);

const expressEjsLayout = require('express-ejs-layouts');

// mongoose
mongoose.connect('mongodb://localhost/frugali_TEA', {useNewUrlParser: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log ("we're connected!")
});

app.set('view engine', 'ejs');
app.use("/", express.static('./'));
// app.use(expressEjsLayout);

app.use(express.urlencoded({extended : false}));
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

app.use('/', require('./routes/index.js'));

// console.log('test')
app.listen(port, () => {
  console.log(`App listening on: ${port}`);
});
