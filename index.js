const express = require('express');
const connectDB = require('./dbConnection/connection.js');

// const Item = require('./models/item.js');

const itemRouts = require('./routes/itemRoutes');


const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.json());

app.use('/items', itemRouts);

connectDB();

app.listen(PORT);













// it works
// app.post('/', async (req,res) => {

//     const item = new Item({

//         name: "milk",
//         checked: false
//     });

//     const x = await item.save();
//     res.json(x);


// });




app.get('/', async (req, res) => {


    // const item = await Item.find();
    res.json("Bienvenido!!!");
    // res.send('dale campeon');
});






