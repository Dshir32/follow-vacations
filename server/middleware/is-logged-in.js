function isLoggedIn(req, res, next) {
    if (!req.session.user) {
        res.status(401).send("You are not logged in");
    } else {
    next();
    }
}

module.exports = isLoggedIn;