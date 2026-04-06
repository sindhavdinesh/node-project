const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://ds3568065_db_user:Dinesh123@cluster0.ev8bqv9.mongodb.net/bookstore',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log('DB is connected successfully');
});

module.exports = db;