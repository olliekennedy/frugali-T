const express = require('express');
const router = express.Router();
const app = express();
const ejs = require('ejs');
const port = 3000;
const mongoose = require('mongoose');
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

app.use('/', require('./routes/index.js'));

console.log('test')
app.listen(port, () => {
  console.log(`App listening on: ${port}`);
});
