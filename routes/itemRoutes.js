import express from 'express';
// const express = require('express'); replaced

import {getAllItems, getItem, postItem, updateItem, deleteItem} from '../controllers/itemCotrollers.js';
// const {getAllItems, getItem, postItem, updateItem, deleteItem} = require('../controllers/itemCotrollers.js'); replaced

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.post('/:id', updateItem);
router.delete('/:id', deleteItem);

// export {router};
export default router;
// module.exports = router; replaced