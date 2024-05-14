import conversation from "../Models/conversation.js";
 

const getMessage = async (req,res) => {
    try {
        const { id: userToChat } = req.params;
        console.log(userToChat,"1");
        const senderId = req.user._id;
        console.log(senderId,"2");
        const DM = await conversation.findOne({
            participants: { $all: [senderId, userToChat] },
        }).populate("messages");
          
        if (!DM) {
            return res.status(200).json([]);
        }
        res.status(200).json(DM.messages);
    } catch (error) {
        console.log("Error",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export default getMessage;