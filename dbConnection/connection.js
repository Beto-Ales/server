import mongoose from 'mongoose';


const URI = "mongodb+srv://beto:4BTkvc9B3rcRsZOC@cluster0.nf0fd.mongodb.net/Cluster0?retryWrites=true&w=majority";
            


const connectDB = async () => {await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    });
    console.log('db connected..!');
};



export default connectDB;
