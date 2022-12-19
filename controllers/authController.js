const { User } = require("../model/model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authController = {
    //Register
    registerUser: async(req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)

            //Create new user
            const newUser = new User({
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                password: hashedPassword
            })

            //Save user to DB
            const user = await newUser.save()
            res.status(200).json({ 
                statusCode: 200,
                message: "Register Successfully", 
                payload: {
                    id: newUser.id, 
                    name: newUser.name, 
                    phoneNumber: newUser.phoneNumber
                }
            })
        } catch(error) {
            res.status(500).json({ 
                statusCode: 500, 
                message: "Internal Server Error", 
                payload: null 
            })
        }
    },

    //Login
    loginUser: async(req, res) => {
        try {
            const user = await User.findOne({ phoneNumber: req.body.phoneNumber })
            if (!user) {
                return res.status(404).json({ 
                    statusCode: 404, 
                    message: "Wrong phone number", 
                    payload: null 
                })
            }
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (!isValidPassword) {
                return res.status(404).json({ 
                    statusCode: 404, 
                    message: "Wrong password", 
                    payload: null 
                })
            }
            if (user && isValidPassword) {
                const token = jwt.sign({
                    id: user.id
                },
                process.env.JWT_ACCESS_KEY,
                {
                    expiresIn: "30d"
                })
                res.status(200).json({ 
                    statusCode: 200, 
                    message: "Login successfully", 
                    payload: {
                        id: user.id, 
                        name: user.name, 
                        phoneNumber: user.phoneNumber,
                        token: token
                    }
                })
            }
        } catch(error) {
            res.status(500).json({ 
                statusCode: 500, 
                message: "Internal Server Error", 
                payload: null 
            })
        }
    }
}

module.exports = authController