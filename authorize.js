const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === "Sudeep") {
        req.user = { name: 'Sudeep', id: 3 }
        next();
    } else {
        res.status(401).send('Unauthorized');
    }

}

module.exports = authorize;