// const jwt = require('jsonwebtoken');

// const SECRET_KEY = process.env.SECRET_KEY;

// const authMiddleware = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWtih('Bearer ')) {
//         return res.status(401).json({ message: "Unauthorized: No token provided"});
//     }

//     const token = authHeader.split(" ")[1];
//     try {
//         const decoded = jwt.verify(token, SECRET_KEY);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(401).json({ message: "Unauthorized: Invalid token" });
//     }
// }

// module.exports = authMiddleware;
