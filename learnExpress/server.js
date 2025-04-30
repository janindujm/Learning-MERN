const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  console.log('Request received!');
  res.render('index', { title1: 'Home' });
})
app.listen(3000)