const db = require("../config/db.config")
// const {hash, compare, hashSync} = require("bcrypt")
// const {createToken} = require("../middleware/authenticateUser")

class Cart {
    getCart(req, res) {
        const strQry = 

        `SELECT prodName, prodPrice, prodURL FROM Users INNER JOIN Cart ON Users.userID = Cart.userID INNER JOIN Products ON Cart.prodID = Products.prodID WHERE Cart.userID = ${req.params.id};`;

        db.query(strQry, (err, results) => {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }

    addCart(req, res) {
        const strQry = 
        `INSERT INTO Cart SET ?;`;

        db.query(strQry, [req.body],
            (err) => {
                if (err) {
                    res.status(400).json({err: "UNABLE TO INSERT A NEW RECORD"});
                } else {
                    res.status(200).json({msg: "CART INFO IS SAVED"});
                }
            }
        );
    }

    updateCart(req, res) {
        const strQry = 
        `UPDATE Cart SET ? WHERE cartID = ?;`

        db.query(strQry, [req.body, req.params.id],
            (err) => {
                if (err) {
                    res.status(400).json({err: "UNABLE TO UPDATE A RECORD"});
                } else {
                    res.status(200).json({msg: "CART WAS UPDATED"})
                }
            });
    }

    deleteCart(req, res) {
        const strQry = 
        `DELETE FROM Cart WHERE cartID = ?;`;

        db.query(strQry, [req.params.id], (err) => {
            if (err) res.status(400).json({err: "THE RECORD WAS NOT FOUND"});
            res.status(200).json({msg: "CART WAS CLEARED"})
        })
    }

    deleteACart(req, res) {
        const strQry = 
        `DELETE FROM Cart WHERE cartID = ?;`;

        db.query(strQry, [req.params.id], (err) => {
            if (err) res.status(400).json({err: "THE RECORD WAS NOT FOUND"})
            res.status(200).json({msg: "A CART WAS REMOVED"})
        })
    }
}

module.exports = {
    Cart
}
