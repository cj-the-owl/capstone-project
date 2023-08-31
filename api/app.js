require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const cookieParser = require("cookie-parser")
// const { errorHandling } = require("./middleware")
const route = require("./controller")

app.use((req, res, next) => {
    res.header("Acess-Control-Allow-Origin", "*",)
    res.header("Acess-Control-Allow_Credentials", "true",)
    res.header("Acess-Control-Allow-Methods", "*",)
    res.header("Acess-Control-Allow-Headers", "*",)
    next()
})

app.use(
    cors(),
    cookieParser(),
    express.json(),
    express.urlencoded({ extended: false })
)

app.use(route)
// app.use(errorHandling)

app.listen(port, () => {
    console.log(`Server is vibing on PORT: ${port}`)
})