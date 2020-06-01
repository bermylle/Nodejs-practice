const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  }).then(result => {
    console.log('Created product');
  }).catch(err => {
    console.log(err);
  });
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodID = req.params.productID;
  Product.findByPk(prodID)
    .then(product => {
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product : product
        });
    })
    .catch(err => {
      console.log(err);
    });
  
};

exports.postEditProduct = (req,res,next) => {
  const prodID = req.body.productID;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  const updatedProduct = new Product(prodID,updatedTitle,updatedImageUrl,updatedDescription,updatedPrice);
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('admin/products', {
        products: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req,res,next) => {
  const prodID = req.body.productID;
  Product.deleteById(prodID);
  res.redirect('/admin/products');
};