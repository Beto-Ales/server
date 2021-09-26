import express from 'express';


import {getAllItems, getItem, postItem, updateItem, deleteItem} from '../controllers/itemCotrollers.js';


const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.post('/:id', updateItem);
router.delete('/:id', deleteItem);


export default router;
