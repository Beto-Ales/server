import mongoose from 'mongoose';


const URI = "mongodb+srv://:@cluster0g6hh3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
            


const connectDB = async () => {await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    });
    console.log('db connected..!');
};



export default connectDB;
