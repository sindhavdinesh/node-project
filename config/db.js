const mongoose = require('mongoose');

mongoose.connect('mongodb://ds3568065_db_user:Dinesh123@ac-deyrdkz-shard-00-00.ev8bqv9.mongodb.net:27017,ac-deyrdkz-shard-00-01.ev8bqv9.mongodb.net:27017,ac-deyrdkz-shard-00-02.ev8bqv9.mongodb.net:27017/bookstore?ssl=true&replicaSet=atlas-xxg05p-shard-0&authSource=admin&retryWrites=true&w=majority')
const db = mongoose.connection;
db.once('open', (err) => {
    if (err) {
        console.log(err);
        return;

    }
    console.log('DB is connected successfully');
})
module.exports = db;
