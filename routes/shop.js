const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    res.send('<p>i love MEAN Stack</p>');
}); 

module.exports = router;