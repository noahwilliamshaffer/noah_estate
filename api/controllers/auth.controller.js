import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    //info we get from browser
   const {username, email, password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password, 10);
   const newUser = new User({username, email, password});
   //this saving takes time so we use await and change function to async
   await newUser.save()
   //201 is for created
   res.status(201).json("User created successfully!");
}