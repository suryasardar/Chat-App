import express from "express";
import dotenv from "dotenv"
import authRoutes from "./Routes/route.js"
import connectToMongo from "./DB/connectDb.js";
import MessageRoutes from "./Routes/message.js";
import userRoutes from "./Routes/user.js";
import cookieParser from "cookie-parser";


const app = express();
//Midddleware
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
dotenv.config();

//routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", MessageRoutes);
app.use("/api/users",userRoutes);





app.listen(PORT, () => {
    connectToMongo();
    console.log(`server listening on ${PORT}`);
})