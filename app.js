// Core NodeJS module
const path = require('path');
// 3rd Party modules
const express = require('express');
const bodyParser = require('body-parser');

// Express
const app = express();

// Templating Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Controller
const errorController = require('./controllers/error');

// MYSQL db
const db = require('./util/database');
// MYSQL queries
db.execute('SELECT * FROM products')
    .then(() => {
    
})
.catch();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
