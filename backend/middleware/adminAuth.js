
const jwt =require("jsonwebtoken");
require('dotenv').config();
const SECRET_KEY=process.env.ADMIN_SECRET_KEY;

function adminAuth(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(403).json({
            message: "Please provide a token"
        });
    }

    try {
        // Decoding token using JWT
        const decodedAdmin = jwt.verify(token, SECRET_KEY);
        
        req.adminId = decodedAdmin.id; // Attach admin ID to the request object
        next(); // Proceed to the next middleware or route handler

    } catch (err) {
        console.error("Token verification error:", err); // Log the error for debugging
        return res.status(403).json({
            message: "Invalid token"
        });
    }
}

module.exports=adminAuth;