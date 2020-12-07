const express = require ('express');
const app = express();
const ejs = require('ejs');
const port = 3000;

app.set('view engine', 'ejs');

// app.configure(function(){

// });
   app.use("/static", express.static('./static/'));

app.get('/', (req, res) => {
  res.render('index');
})


app.listen(port, () => {
  console.log(`App listening on: ${port}`);
})
