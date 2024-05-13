import express from "express";
const router = express.Router();
import Login from "../controllers/Login.js";
import Signup from "../controllers/Signup.js";
import Logout from "../controllers/Logout.js";



router.post("/login", Login);
router.post("/signup", Signup);
router.post("/logout",Logout);



export default router;