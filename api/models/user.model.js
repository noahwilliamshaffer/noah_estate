import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String, // Use "String" instead of "string"
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
    }

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;