const express = require('express');

const {getAllItems, getItem, postItem, updateItem, deleteItem} = require('../controllers/itemCotrollers.js');

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.post('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;