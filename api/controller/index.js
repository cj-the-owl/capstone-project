const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const route = express.Router()
const {Products} = require("../model/products")
const {User} = require("../model/users")
const product = new Products()
const user = new User()

//for the home page of the api
route.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static/html/index.html'));
});

route.get('/products', (req, res) => {
    product.fetchProducts(req, res);
})

route.get('/product/:id', (req, res) => {
    product.fetchProduct(req, res);
})


route.post('/product', bodyParser.json(), (req, res) => {
    product.addProduct(req, res);
})

route.put('/product/:id', bodyParser.json(), (req, res) => {
    product.updateProduct(req, res);
})

route.delete('/product/:id', (req, res) => {
    product.deleteProduct(req, res);
})


route.get("/users", (req, res) => {
    user.fetchUsers(req, res)
})

route.get("/user/:id", bodyParser.json(), (req, res) => {
    user.fetchUser(req, res)
})

route.put("/user/:id", bodyParser.json(), (req, res) => {
    user.updateUser(req, res)
})

route.delete("/user/:id", bodyParser.json(), (req, res) => {
    user.deleteUser(req, res)
})

route.post("/login", bodyParser.json(), (req, res) => {
    user.login(req, res)
})

route.post("/register", bodyParser.json(), (req, res) => {
    user.register(req, res)
})
module.exports = route