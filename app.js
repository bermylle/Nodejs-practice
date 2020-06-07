// Core NodeJS module
const path = require('path');
// 3rd Party modules
const express = require('express');
const bodyParser = require('body-parser');
// User import
const User = require('./models/user');
// Express
const app = express();

// Controller
const errorController = require('./controllers/error');

// Mongoose import
const mongoose = require('mongoose');



// Templating Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5eda1300327c5f3314823367')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

// Middlewares
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorController.get404);

mongoose.connect('mongodb+srv://bermyllerazon:sOlEw2ysv3wEWDbG@cluster0-mlvbq.mongodb.net/shop?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => {
        User.findOne()
        .then(user => {
            if(!user) {
                const user = new User({
                    name: 'Bermylle',
                    email: 'bermylle@gmail.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
        app.listen(3000);
    })
    .catch(err => console.log(err));