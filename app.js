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


// Mongoose import
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bermyllerazon:sOlEw2ysv3wEWDbG@cluster0-mlvbq.mongodb.net/shop?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => {
        app.listen(3000);
    })
    .catch(err => console.log(err));