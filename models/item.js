const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    checked: Boolean
});

const Item = mongoose.model('Item', itemSchema);


module.exports = Item;