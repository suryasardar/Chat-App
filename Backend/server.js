import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./Routes/route.js";
import connectToMongo from "./DB/connectDb.js";
import MessageRoutes from "./Routes/message.js";
import userRoutes from "./Routes/user.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import {app, server} from "./socket/socket.js"

// const app = express();
//Midddleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(session({
    secret:process.env.JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            // secure:process.env.NODE_ENV !=="development"
            secure:false}
}));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", MessageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongo();
  console.log(`server listening on ${PORT}`);
});
