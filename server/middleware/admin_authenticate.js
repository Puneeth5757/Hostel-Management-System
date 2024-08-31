// to validate the admin
const jwt = require("jsonwebtoken");
const admindb = require("../models/adminSchema")
const keysecret = "Puneeth@891011121314151617181920"

const admin_authenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization;
        // console.log(token);

        const verifytoken = jwt.verify(token,keysecret);
        // console.log(verifytoken);

        const rootadmin = await admindb.findOne({_id:verifytoken._id});
        // console.log(rootadmin);

        if(!rootadmin) {throw new Error("admin not found")}

        req.token = token
        req.rootadmin = rootadmin
        req.adminId = rootadmin._id

        next();

    } catch (error) {
         res.status(401).json({status:401,message:"Unauthorized no token provide"}) 
    }
}

module.exports = admin_authenticate