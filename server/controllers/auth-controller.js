const express = require("express");
const authLogic = require("../business-logic/auth-logic");
const router = express.Router();
const isLoggedIn = require('../middleware/is-logged-in');

//Add.Register user
router.post("/register", async (request, response) => {
    try {
        const user = request.body;
        const userName = user.userName;
        const isExists = await authLogic.isUserExists(userName)
        if (isExists) {
            response.status(210).send("User already exist")
        } else {
            const addedUser = await authLogic.register(user);
            response.status(201).json(addedUser);
        }
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

//Login
router.post("/login", async (request, response) => {
    try {
        const userName = request.body.userName;
        const password = request.body.password;
        const userData = await authLogic.login(userName, password);
        if (!userData) {
            response.status(401).send("Illegal user name or password")
        }
        request.session.user = userData //Save user to session
        response.status(200).json(userData);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get('/get-user', (req, res) => {
    if (req.session.user) {
        res.status(200).json(req.session.user)
    } else {
        res.status(205).send('not logged in')
    }
});

router.post("/logout", isLoggedIn, async (request, response) => {
    try {
        request.session = null//kill session.
        response.end();
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;