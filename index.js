const express = require('express');
const connectDB = require('./dbConnection/connection.js');


const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

app.listen(PORT);




// app.use(express.json()); add this later



