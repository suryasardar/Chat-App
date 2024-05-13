import express from "express"
import User from "../Models/usermodel.js";

const Signupuser = async (req, res) => {
    try {
       
       let { fullName, username, password, confirmPassword, gender } = req.body;
       console.log(fullName, username, password, confirmPassword, gender);
       //
       if (password !== confirmPassword) {
           return res.status(400).json({error:"passwords don't match"})
       }
       //
       const user = User.findOne({ username });
       if (user) {
           return res.status(400).json({error:"User already exists"})
       }
       // HASH PASSWORD
       //https://avatar.iran.liara.run/public/boy
       const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
       const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
       
       const newUser = new User({
           fullName,
           username,
           password,
           gender,
           profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
       })
       await newUser.save();

       res.status(201).json({
           _id: newUser._id,
           fullName:newUser.fullName,
           username: newUser.username,
           profilePic:newUser.profilePic
       })
   } catch (error) {
       console.log("Error",error.message);
    res.status(500).json({error:"Internal server error"})
   }
}

export default Signupuser;