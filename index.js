import express from 'express';

import connectDB from './dbConnection/connection.js';





import itemRoutes from './routes/itemRoutes.js'



const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.json());

app.use('/items', itemRoutes);

connectDB();

app.listen(PORT);




// first message welcome

app.get('/', async (req, res) => {
    
    res.json("Welcome");
    
});