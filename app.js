const express = require('express');
const path = require('path');
const Book = require('./model/bookModel');
require('./config/db');

const app = express();
const PORT = 3001;

/* ================== MIDDLEWARE ================== */
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('view engine', 'ejs');

/* ================== ROUTES ================== */

// Add Page
app.get('/', (req, res) => {
    res.render('addData');
});

// Create Book
app.post('/addData', Book.uploadedImage, async (req, res) => {
    try {
        const { name, author, isbn, genre, total, description } = req.body;

        await Book.create({
            name,
            author,
            isbn,
            genre,
            total,
            description,
            image: req.file ? req.file.filename : null
        });

        res.redirect('/showData');
    } catch (err) {
        console.error('Add Error:', err);
        res.send('Error adding book');
    }
});

// Show Books
app.get('/showData', async (req, res) => {
    try {
        const data = await Book.find().sort({ _id: -1 });
        res.render('showData', { data });
    } catch (err) {
        console.error('Fetch Error:', err);
        res.send('Error fetching data');
    }
});

// Delete Book
app.get('/delete/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.redirect('/showData');
    } catch (err) {
        console.error('Delete Error:', err);
        res.send('Error deleting');
    }
});

// Edit Page
app.get('/edit/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.render('addData', { book });
    } catch (err) {
        console.error('Edit Fetch Error:', err);
        res.send('Error loading edit page');
    }
});

// Update Book
app.post('/update/:id', Book.uploadedImage, async (req, res) => {
    try {
        const { name, author, isbn, genre, total, description } = req.body;

        let updateData = {
            name,
            author,
            isbn,
            genre,
            total,
            description
        };

        if (req.file) {
            updateData.image = req.file.filename;
        }

        await Book.findByIdAndUpdate(req.params.id, updateData);
        res.redirect('/showData');
    } catch (err) {
        console.error('Update Error:', err);
        res.send('Error updating');
    }
});

/* ================== SERVER ================== */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});