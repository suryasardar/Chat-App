 import bcrypt from "bcryptjs"
import User from "../Models/usermodel.js";
import GenarateJwt from "../utils/generatetoken.js";

const Signupuser = async (req, res) => {
    try {
     
      
       const { fullName, username, password, confirmpassword, gender } = req.body;
       console.log(fullName, username, password, confirmpassword, gender);
       //
       if (password !== confirmpassword) {
           return res.status(400).json({error:"passwords don't match"})
       }
       //
       const user =await User.findOne({ username });
       if (user) {
           return res.status(400).json({error:"User already exists"})
       }
        // HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);
       //https://avatar.iran.liara.run/public/boy
       const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
       const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
       
       const newUser = new User({
           fullName,
           username,
           password:hashpassword,
           gender,
           profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
       })
        if (newUser) {
            //jwt token
            const token = GenarateJwt(newUser._id);
            console.log(token,"Jtoken");
            await newUser.save();

       res.status(201).json({
           _id: newUser._id,
           fullName:newUser.fullName,
           username: newUser.username,
           profilePic: newUser.profilePic,
           token
       })
        } else {
            res.status(404).json({ error :"Invalid data"});
     }
   } catch (error) {
       console.log("Error",error.message);
    res.status(500).json({error:"Internal server error"})
   }
}

export default Signupuser;