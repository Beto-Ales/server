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


















// app.get('/', async (req, res) => {


//     const item = await Item.find();
//     res.json(item);
//     // res.send('dale campeon');
// });






