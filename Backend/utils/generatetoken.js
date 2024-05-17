import jwt from "jsonwebtoken"

const GenarateJwt = (userId) => {
     return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    })
    // console.log(token, "Jtoken");
    
    // req.session.token = token;

    // res.cookie("auth", token, {
    //     maxAge: 15 * 24 * 60 * 60 * 1000,
    //     httpOnly: true,
    //     sameSite: "Lax",
    //     // secure:process.env.NODE_ENV !=="development",
    //     secure: false,
    //     path: '/'
    // })
 };

export default GenarateJwt;

 