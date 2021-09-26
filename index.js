import express from 'express';
// const express = require('express'); replaced
import connectDB from './dbConnection/connection.js';
// const connectDB = require('./dbConnection/connection.js'); replaced


// import Item from './models/item.js'; this is not needed in this file
// const Item = require('./models/item.js'); replaced

import itemRoutes from './routes/itemRoutes.js'
// const itemRouts = require('./routes/itemRoutes'); there was a spelling mistake


const PORT = process.env.PORT || 3306;

const app = express();

app.use('/items', itemRoutes);

app.use(express.json());

connectDB();

app.listen(PORT);




// first message welcome

app.get('/', async (req, res) => {
    
    res.json("Welcome");
    
});