import express from "express";
import dotenv from "dotenv"
import authRoutes from "./Routes/route.js"
import connectToMongo from "./DB/connectDb.js";


const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

//Midddleware
app.use("/api/auth", authRoutes);
app.use(express.json());



app.listen(PORT, () => {
    connectToMongo();
    console.log(`server listening on ${PORT}`);
})