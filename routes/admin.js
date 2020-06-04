const path = require('path');
const express = require('express');

// Controller
const adminController = require('../controllers/admin');

// Router => get post use 
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/product-list-admin => GET
//router.get('/products', adminController.getProducts);

//router.get('/edit-product/:productID', adminController.getEditProduct);

//router.post('/edit-product', adminController.postEditProduct);

//router.post('/delete-product', adminController.postDeleteProduct);
module.exports = router;
