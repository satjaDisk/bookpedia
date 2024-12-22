
const express = require('express');
const morgan = require('morgan');
const booksRoutes = require('./routes/books');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome to Book API! Use /api/v1/books to access the book endpoints.');
});



app.use('/api/v1/books', booksRoutes);

const port = 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
