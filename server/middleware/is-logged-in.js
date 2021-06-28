function isLoggedIn(req, res, next) {
    console.log(req.session.user);
    if (!req.session.user) {
        res.status(401).send("You are not logged in");
    } else {
    next();
    }
}

module.exports = isLoggedIn;