const db = require("../config/db.config")
const {hash, compare, hashSync} = require("bcrypt")
const {createToken} = require("../middleware/authenticateUser")

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
    login(req, res) {
        const {emailAdd, userPass} = req.body
        const strQry = 
        `SELECT * 
        FROM Users 
        WHERE emailAdd = '${emailAdd}';
        `

        db.query(strQry, async (err, data) => {
            if (err) throw err
            if ((!data.length) || (data == null)) {
                res.status(401).json({err: "Sorry, you gave the wrong email address"})
            } else {
                await compare(userPass, data[0].userPass, (cErr, cResult) => {
                    if (cErr) throw cErr
                    const jwToken = createToken (
                        {
                            emailAdd, userPass
                        }
                    )
                    res.cookie("LegitUser", jwToken, {
                        maxAge: 360000,
                        httpOnly: true
                    })
                    if (cResult) {
                        res.status(200).json({
                            msg: "User is logged in", jwToken, result: data[0]
                        })
                    } else {
                        res.status(401).json({
                            err: "You have entered an invalid password or have not registered"
                        })
                    }
                })
            }
        })
    }
    async register(req, res) {
        const data = req.body;

        data.userPass = await hash(data.userPass, 15);

        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        };

        const query = 
        `INSERT INTO Users SET ?;`;

        db.query(query, [data], (err) => {
            if (err) throw err

            let token = createToken(user)
            res.cookie("LegitUser", token, {
                maxAge: 360000,
                httpOnly: true
            });

            res.json({
                status: res.statusCode,
                message: "A new user has registered"
            });
        });
    }
}

module.exports = {User}