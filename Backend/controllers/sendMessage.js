import conversation from "../Models/conversation.js";
import Message from "../Models/messages.js";

const sendMessage = async (req, res) => {
    console.log(req.body);
    try {
        const { message } = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id;
        console.log(message,receiverId,senderId);

     let DM = await conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!DM) {
            DM = await conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        console.log(newMessage,"m");
        if (newMessage) {
             DM.messages.push(newMessage._id);
        }
        // await DM.save();
        // await newMessage.save();
        await Promise.all([DM.save(), newMessage.save()]);
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error",error.message);
        res.status(500).json({error:"Internal server error"})
    } 
    
}

export default sendMessage;