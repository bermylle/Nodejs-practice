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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Controller
const errorController = require('./controllers/error');

// Middlewares
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

// MongoDB connector import
const mongoConnect = require('./util/database').mongoConnect;

<<<<<<< HEAD
=======

>>>>>>> 27217d31c6fcf37f9efe0345644b3f09f7b26280
app.use((req,res,next) => {
    next();
})
mongoConnect((client) => {
    console.log(client);
    app.listen(3000);
});
<<<<<<< HEAD
=======

>>>>>>> 27217d31c6fcf37f9efe0345644b3f09f7b26280
