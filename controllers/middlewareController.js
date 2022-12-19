const jwt = require("jsonwebtoken")

const middlewareController = {
    //Verify token
    verifyToken: (req, res, next) => {
        const token = req.headers.token
        if (token) {
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (error, user) => {
                if (error) {
                    return res.status(403).json({ 
                        statusCode: 403, 
                        message: "Token is not valid", 
                        payload: null 
                    })
                } else {
                    req.user = user
                    next()
                }
            })
        } else {
            res.status(401).json({ 
                statusCode: 401, 
                message: "You're not authenticated", 
                payload: null 
            })
        }
    }
}
module.exports = middlewareController