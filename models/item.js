import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    check: Boolean,
    artWrokshop: Boolean
});

const Item = mongoose.model('Item', itemSchema);


export {Item};
// module.exports = Item; replaced