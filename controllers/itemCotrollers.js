import mongoose from 'mongoose';
// const mongoose = require('mongoose'); replaced

import Item from '../models/item.js';
// const Item = require('../models/item.js'); replaced




const getAllItems = async (req,res) => {

    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};


const getItem = async (req, res) => {

    const {id: _id} = req.params;

    try {
        const item = await Item.findById(_id)
        .then(item => res.json(item));
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const postItem = async (req, res) => {

    const item = req.body;
    const newItem = new Item(item);
    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

const updateItem = async (req, res) => {

    const {id: _id} = req.params;
    const item = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No item with that id');
    try {
        const updateItem = await Item.findByIdAndUpdate(_id, item, {new: true});
        res.json(updateItem);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deleteItem = async (req, res) => {

    const {id: _id} = req.params;    

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No item with that id');

    try {
        await Item.findByIdAndDelete(_id)
        .then(() => res.json('Item Deleted'));
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
};

export {getAllItems, getItem, postItem, updateItem, deleteItem}; //ensure spelling
// module.exports = {getAllItems, getItem, postItem, updateItem, deleteItem}; replaced