// Core NodeJS module
const path = require('path');
// 3rd Party modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Templating Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path : 'ERROR' });
});

app.listen(3000);
