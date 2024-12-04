import mongoose from "mongoose";

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected successfully");
  } catch (error){
      console.log("THis is your error ",error)
  }
}

export default connectDB;