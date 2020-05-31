const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const Cart = require('./cart');

const p = path.join(
    rootDir, 
    'data', 
    'products.json'
);

const getProductFromFile = cb => {
    
    fs.readFile(p, (err,fileContent) => {
        if (err) {
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));  
        }
        
    });
   
};

module.exports = class Product {
    
    constructor(id,title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductFromFile(products => {
            if (this.id) {
                const exisitingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[exisitingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    console.log('ERROR: ', err);
                })
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log('ERROR: ', err);
                })
            }
        });
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }

    static findById(id, cb) {
        getProductFromFile(products => {
            const product = products.find(p => p.id === id); 
            cb(product);
        });
    }

    static deleteById(id) {
        getProductFromFile(products => {
            const product = products.find(prod => prod.id ===id);
            const updatedProducts = products.filter(prod => prod.id !== id); 
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if(!err) {
                    Cart.deleteProduct(id,product.price);
                }
            });
        });
    }
}