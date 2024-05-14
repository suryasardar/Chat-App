import express from "express";
const router = express.Router();
import Login from "../controllers/Login.js";
import Logout from "../controllers/Logout.js";
import Signupuser from "../controllers/Signup.js";



router.post("/signup", Signupuser);
router.post("/login", Login);
router.post("/logout",Logout);



export default router;