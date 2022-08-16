import express from 'express';
import edithorController from '../controllers/edithorController.js';

const router = express.Router();

router
    .get('/edithor', edithorController.listEdithor)
    .get('/edithor/:id', edithorController.listEdithorForID)
    .post('/edithor', edithorController.registerEdithor)
    .put('/edithor/:id', edithorController.updateEdithor)
    .delete('/edithor/:id', edithorController.deleteEdithor)

export default router;