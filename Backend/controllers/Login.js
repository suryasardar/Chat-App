import express from "express"
import User from "../Models/usermodel.js";
import bcrypt from "bcryptjs"
import GenarateJwt from "../utils/generatetoken.js";

const Loginuser = async (req, res) => {
   try {
      const { username, password } = req.body;
      console.log(username,password);

      const user = await User.findOne({ username });
       console.log(user.password,"user");
      const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
      console.log(isPasswordCorrect,"pass");
      
      if (!user||!isPasswordCorrect) {
         return res.status(404).json({ error: "Invalid credentials" });
      }
      GenarateJwt(user._id, req);

      res.status(201).json({
         _id: user._id,
         fullName:user.fullName,
         username: user.username,
         profilePic:user.profilePic
     })

      console.log(req.body);
   } catch (error) {
      console.log("Error",error.message);
      res.status(500).json({error:"Internal server error"})
   }
  
}

export default Loginuser;