const db = require("../config/db.config")

class Products {
    fetchProducts(req, res) {
        const strQry = 
        `SELECT prodID, prodName, quantity, prodPrice, category, prodUrl FROM Products;`;
        db.query(strQry, (err, data) => {
            if(err) throw err;
            res.status(200).json(data)
        });
    }
    fetchProduct(req, res) {
        const strQry = 
        `SELECT prodID, prodName, quantity, prodPrice, category, prodUrl FROM Products WHERE prodID = ?;`;
        db.query(strQry, [req.params.id], (err, data) => {
            if(err) throw err;
            res.status(200).json(data)
        });
    }
    addProduct(req, res) {
        const strQry =
        `INSERT INTO Products SET ?;`;
        db.query(strQry, [req.body],
            (err) => {
                if (err) {
                    res.status(400).json({err: "UNABLE TO INSERT THIS NEW RECORD."});
                } else {
                    res.status(200).json({msg: "PRODUCT HAS BEEN SAVED"});
                }
            }
        );
    }
    updateProduct(req, res) {
        const query = 
        `UPDATE Products SET ? WHERE prodID = ?;`;

        db.query(query,  [req.body, req.params.id], (err) => {
            if (err) throw err;

            res.json({
                status: res.statusCode,
                message: "Product has been updated",
            });
        });
    }
    deleteProduct(req, res) {
        const strQry =
        `DELETE FROM Products WHERE prodID = ?;`;

        db.query(strQry, [req.params.id], (err) => {
            if (err) res.status(400).json({err: "THIS RECORD WAS NOT FOUND"});
            res.status(200).json({msg: "PRODUCT WAS DELETED"});
        })
    }
}

module.exports = {Products}