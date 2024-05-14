 
import express from "express";
import protectRoute from "../Middleware/protectRoute.js";
import getUsers from "../controllers/getUsers.js";

const router = express.Router();

router.get('/',protectRoute,getUsers);

export default router;


