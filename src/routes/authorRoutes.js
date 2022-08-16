import express from 'express';
import authorController from '../controllers/authorCrontoller.js';

const router = express.Router();

router
    .get('/author', authorController.listAuthor)
    .get('/author/:id', authorController.listAuthorForID)
    .post('/author', authorController.registerAuthor)
    .put('/author/:id', authorController.updateAuthor)
    .delete('/author/:id', authorController.deleteAuthor)

export default router;