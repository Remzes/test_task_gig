const express = require('express')

const app = express()

const port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port)