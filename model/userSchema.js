import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    fullname:String,
    email:String,
    phone:String,
    status:String
});

const user=mongoose.model('User',userSchema);


export default user;