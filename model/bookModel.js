const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

const IMAGE_PATH = path.join('uploads');

const bookSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    isbn: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', IMAGE_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

bookSchema.statics.uploadedImage = multer({ storage: storage }).single('image');
bookSchema.statics.imagePath = IMAGE_PATH;

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;