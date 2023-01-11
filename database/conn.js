// const MONGO_URI="mongodb+srv://admin:admin@employeemgmt.onqnxsd.mongodb.net/?retryWrites=true&w=majority"
import mongoose from 'mongoose';


const conn=async()=>{
    try {
        const {connection}=await mongoose.connect(process.env.MONGO_URI);
        if(connection.readyState==1){
            console.log("Database connected successfully !!");
        }
    } catch (error) {
        Promise.reject(error)
    }
}

export default conn;