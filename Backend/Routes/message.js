import express from "express";
import sendMessage from "../controllers/sendMessage.js";
import protectRoute from "../Middleware/protectRoute.js";
import getMessage from "../controllers/getMessage.js";

const router = express.Router();

router.post("/send/:id",protectRoute, sendMessage);
router.get("/:id",getMessage);



export default router;