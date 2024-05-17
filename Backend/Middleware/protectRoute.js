import jwt from "jsonwebtoken";
import User from "../Models/usermodel.js";
// import token from "../utils/generatetoken.js";
 

const protectRoute = async (req, res, next) => {
  // const {Jtoken} = GenarateJwt();
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: 'Authorization header missing' });
    }
      const token = req.headers.authorization.split(' ')[1];
    console.log(token, "token");
    
    if (!token) {
      return res.status(401).json({ error: "No Token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ Error: "Invalid Token" });
    }
      
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({error:"user not found"})
        }
        
        req.user = user;
        next();

  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
