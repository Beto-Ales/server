import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    check: {type: Boolean, default: false},
    artWrokshop: {type: Boolean, default: false}
});

const Item = mongoose.model('Item', itemSchema);


export default Item;
// module.exports = Item; replaced