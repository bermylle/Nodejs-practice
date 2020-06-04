const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Product {
    constructor(title, price, description, imageUrl,id) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;

        // edit admin product
        this._id = id;
    }

    save() {
        const db = getDb();
        return db.collection('products')
            .insertOne(this)
            .then(result => {
                //console.log(result);
            })
            .catch(err => console.log(err));
    }

    // find all in mongodb
    static fetchAll() {
        const db = getDb();
        return db.collection('products').find().toArray()
            .then(products => {
                //console.log(products);
                return products
            })
            .catch(err => console.log(err));
    }

    static findByPk(prodID) {
        const db = getDb();
        return db.collection('products')
        .find({_id: new mongodb.ObjectID(prodID)})
        .next()
            .then(product => {
                //console.log(product);
                return product;
            })
            .catch(err => console.log(err));
    }
}


// const Product = sequelize.define('product', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },

//     title: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },

//     price: {
//         type: Sequelize.DOUBLE,
//         allowNull: false
//     },

//     imageUrl: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },

//     description: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

module.exports = Product;