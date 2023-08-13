import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


const connection =()=>{
   const MONGODB_URI=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zrmviea.mongodb.net/?retryWrites=true&w=majority`

  mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
  mongoose.connection.on('connected',()=>{
   console.log('Your database connected sucessfully');

  })
  mongoose.connection.on('disconnected',()=>{

    console.log('Your database not connected');
  })
  mongoose.connection.on('error', (error) => {
    console.log('Error While connecting with database', error.message);
  });
  

}

export default connection;