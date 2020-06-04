const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://bermyllerazon:sOlEw2ysv3wEWDbG@cluster0-mlvbq.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then(cl => {
        console.log('MONGODB connected');
        callback(cl);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;