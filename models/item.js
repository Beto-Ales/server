const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    checked: Boolean
});

const Item = mongoose.model('Item', itemSchema);

// export default Item;

module.exports = Item;