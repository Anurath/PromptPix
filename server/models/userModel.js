import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requuired:true
    },
    email:{
        type:String,
        requuired:true,
        unique:true
    },
    password:{
        type:String,
        requuired:true
    },
    creditBalance:{
        type:Number,
        default:5
    }
})

const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;