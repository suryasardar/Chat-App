import express from "express";
import dotenv from "dotenv"
import authRoutes from "./Routes/route.js"
import connectToMongo from "./DB/connectDb.js";
import MessageRoutes from "./Routes/message.js"


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
dotenv.config();

//Midddleware
app.use("/api/auth", authRoutes);
app.use("/api/messages",MessageRoutes);




app.listen(PORT, () => {
    connectToMongo();
    console.log(`server listening on ${PORT}`);
})