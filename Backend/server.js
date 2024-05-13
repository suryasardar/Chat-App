import express from "express";
import dotenv from "dotenv"
import authRoutes from "./Routes/routh"
dotenv.config();





const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("Hello world !")
})

//Midddleware
app.use("/api/auth",authRoutes);



app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})