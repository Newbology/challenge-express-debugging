const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 8080;

const home = require('./routes/home'); // rename this to router
const about = require('./routes/about'); // rename this to router
const contact = require('./routes/contact'); // rename this to router

app.use(express.static('public'));
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.use('/', home);
app.use('/about', about);
app.use('/contact', contact);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
