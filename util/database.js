const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://bermyllerazon:sOlEw2ysv3wEWDbG@cluster0-mlvbq.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then(cl => {
        console.log('MONGODB connected');
        _db = cl.db();
        callback(cl);
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No db found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;