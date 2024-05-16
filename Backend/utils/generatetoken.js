import jwt from "jsonwebtoken"

const GenarateJwt = (userId, res) => {
    const Jtoken = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    })
console.log(Jtoken,"Jtoken");
    res.cookie("auth", Jtoken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure:process.env.NODE_ENV !=="development"
        
    })
};

export default GenarateJwt;