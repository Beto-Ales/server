const express = require('express');
const connectDB = require('./dbConnection/connection.js');

const Item = require('./models/item.js');

const itemRouts = require('./routes/itemRoutes');


const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.json());

// app.use('/items', itemRouts);

connectDB();

app.listen(PORT);









app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    // res.json('items section');

    // try {
    //     res.json('items section');
    // } catch (error) {
    //     res.json({message: error.message});
    // }
});








app.get('/', async (req, res) => {


    // try {
    //     const items = await Item.find();
    //     res.status(200).json(items);
    // } catch (error) {
    //     res.status(404).json({message: error.message});
    // }


    // const item = await Item.find();
    res.json("Bienvenido!!!");
    // res.send('dale campeon');
});






