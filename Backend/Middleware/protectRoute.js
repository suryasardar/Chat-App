import jwt from "jsonwebtoken";
import User from "../Models/usermodel.js";
import GenarateJwt from "../utils/generatetoken.js";
 

const protectRoute = async (req, res, next) => {
  // const {Jtoken} = GenarateJwt();
    try {
      // console.log(req.auth);
      const token = req.cookies.auth;
      // const token = req.session.token;
      // const token = Jtoken;
      
      
      console.log(token,"token");
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
