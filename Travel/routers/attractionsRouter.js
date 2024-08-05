import express from 'express';
const router = express.Router()
import controller from '../controllers/AttractionController.js';

console.log("hi")

router.get('/', controller.getAll);


router.get('/:id', controller.get);

router.get('/:city/:collectionName', controller.getByCity);

router.post('/', controller.add);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);


export default router;