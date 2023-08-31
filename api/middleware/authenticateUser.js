require("dotenv").config()
const { sign, verify } = require('jsonwebtoken')

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}

function verifyToken(req, res, next) {
    try {
        const token = req.cookies["LegitUser"] !== null ? req.cookies["LegitUser"]: "Please Register"
        const isValid = null
        if(token !== "Please Register") {
            isValid = verify(token, process.env.SECRET_KEY)
            if(isValid) {
                req.authenticated = true
                next()
            } else {
                res.status(400).json({err: "Please Register"})
            }
        } else {
            res.status(400).json({err: "Please Register"})
        }
    } catch (e) {
        res.status(400).json({err: e.message})
    }
}

module.exports = { createToken, verifyToken }