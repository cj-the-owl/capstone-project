const db = require("../config/db.config")
const {hash, compare, hashSync} = require("bcrypt")
const {createToken} = require("../middleware")

class User {
    fetchUsers(req, res) {
        const strQry = 
        `SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile FROM Users;`

        db.query(strQry, (err, data) => {
            if(err) throw err
            res.json(data)
        })
    }
    fetchUser(req, res) {
        const strQry = 
        `SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile FROM Users WHERE userID = ?;`

        db.query(strQry, [req.params.id], (err, data) => {
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: "Sorry, an error occurred"
                })
            } else {
                res.json(data)
            }
        })
    }
    updateUser(req, res) {
        const query = `UPDATE Users SET ? WHERE userID = ?`

        const data = req.body;

        data.userPass = hashSync(data.userPass, 15);

        db.query(query, [data, req.params.id], (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "User details were updated"
            });
        });
    }
    deleteUser(req, res) {
        const strQry =
        `DELETE FROM Users WHERE userID = ?;`

        db.query(strQry, [req.params.id], (err) => {
            if(err) throw err
            res.status(200).json({msg: "Record was removed"})
        })
    }
}

module.exports = {User}