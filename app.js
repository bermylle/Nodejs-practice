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

// Product Models
const Product = require('./models/product');
const User = require('./models/user');


app.use((req,res,next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
})

Product.belongsTo(User, { 
    constraints: true, 
    onDelete: 'CASCADE'
});
User.hasMany(Product);

// Sequelize
const sequelize = require('./util/database');
// Create DB, tables, etc.
sequelize.sync( )
    .then(result => {
        return User.findByPk(1);
        
    })
    .then(user => {
        if (!user) {
            User.create({
                first_name: 'Bermylle',
                last_name: 'Razon',
                email: 'bermylle@gmail.com'
            })
        }
        return user;
    })
    .then(user => {
        //console.log(user);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });




app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

