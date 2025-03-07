import express from 'express';
const route = express.Router();
import casoController from '../controllers/casos.js';

route.post('/', casoController.create);
route.get('/:id', casoController.getOne);
route.get('/', casoController.getAll);
route.put('/:id', casoController.update);
route.delete('/:id', casoController.delete);

export default route;