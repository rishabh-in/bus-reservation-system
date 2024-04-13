import mongoose from 'mongoose';
import color from 'color';

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO DB CONNECTED")
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;