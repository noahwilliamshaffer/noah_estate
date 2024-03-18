import User from "../models/user.model.js";

export const signup = (req, res) => {
    //info we get from browser
   const {username, email, password} = req.body;
   const newUser = new Userer({username, email, password});
}