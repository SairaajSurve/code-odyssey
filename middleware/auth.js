require('dotenv').config()
const jwt = require('jsonwebtoken');
const secret_token = process.env.ACCESS_SECRET;

const jwtauth = async (req,res,next)=>{
    const token = req.headers.authorization;
    if( await jwt.verify(token,secret_token)){
        res.status(401).json({msg : "unauthorized"})
    }
    req.body.access = true;
    next();
}

module.exports = {
    jwtauth
}