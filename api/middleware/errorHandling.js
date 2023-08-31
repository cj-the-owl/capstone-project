function errorHandling(err, res, req, next) {
    if (err) {
        const status = err.status || 500
        res.status(status).json(
            {
                status: status,
                err: "Sorry an error occurred. Please try again later"
            }
        )
    }
    next()
}

module.exports = {errorHandling}