import express from "express"
import User from "../Models/usermodel.js";
import bcrypt from "bcryptjs"
import GenarateJwt from "../utils/generatetoken.js";

const Loginuser = async (req, res) => {
   try {
      const { username, password } = req.body;
      console.log(username,password,"76");

      const user = await User.findOne({ username });
      if (!user) {
         return res.status(404).json({ error: "User not found" });
      }
       console.log(user.password,"user");
      const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
      if (!isPasswordCorrect) {
         return res.status(404).json({ error: "Invalid password" });
      }
      console.log(isPasswordCorrect,"pass");
      
      if (!user||!isPasswordCorrect) {
         return res.status(404).json({ error: "Invalid credentials" });
      }
      const token=GenarateJwt(user._id, req);

      res.status(200).json({
         _id: user._id,
         fullName:user.fullName,
         username: user.username,
         profilePic: user.profilePic,
         token
     })

      console.log(req.body);
   } catch (error) {
      console.log("Error",error.message);
      res.status(500).json({error:"Internal server error"})
   }
  
}

export default Loginuser;