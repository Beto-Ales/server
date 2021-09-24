const express = require('express');
const connectDB = require('./dbConnection/connection.js');

const Item = require('./models/item.js');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

connectDB();

app.listen(PORT);




app.post('/', async (req,res) => {

    const item = new Item({

        name: "milk",
        checked: false
    });

    const x = await item.save();
    res.json(x);


});




app.get('/', async (req, res) => {


    const item = await Item.find();
    res.json(item);
    // res.send('dale campeon');
});






