import User from "../Models/usermodel.js";

const getUsers =async (req,res) => {
    try {
        const loggedInUserId = req.user._id;
const Allusers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")
 
        res.status(200).json(Allusers);

    } catch (error) {
        console.log("Error",error.message);
    res.status(500).json({error:"Internal server error"})
    }
}

export default getUsers;