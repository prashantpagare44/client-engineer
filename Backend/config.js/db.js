import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{} );
        console.log("mongodb connect");

    }
    catch(error){
        console.error("mongoDB connection Error:",error);
        process.exit(1);
    }
};
export default connectDB;
