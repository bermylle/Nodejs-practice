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

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

// MongoDB connector import
const mongoConnect = require('./util/database').mongoConnect;

<<<<<<< HEAD
// Associations [Relations]
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

// Sequelize
const sequelize = require('./util/database');

// Create DB, tables, etc.
sequelize
.sync()
    .then(result => {
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
            return User.create({
                first_name: 'Bermylle',
                last_name: 'Razon',
                email: 'bermylle@gmail.com'
            })
        }
        return user;
    })
    .then(user => {
        
        return user.createCart();
    })
    .then(cart => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });



=======
app.use((req,res,next) => {
    next();
})
mongoConnect((client) => {
    console.log(client);
    app.listen(3000);
});
>>>>>>> mongodb
