import express from 'express';
import booksController from '../controllers/bookCrontoller.js';

const router = express.Router();

router
    .get('/book', booksController.listBooks)
    .get('/book/:id', booksController.listBooksForID)
    .get('/book/search', booksController.listBooksForEdithor)
    .post('/book', booksController.registerBook)
    .put('/book/:id', booksController.updateBook)
    .delete('/book/:id', booksController.deleteBook)

export default router;