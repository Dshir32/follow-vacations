const express = require("express");
const vacationLogic = require("../business-logic/vacation-logic");
const authLogic = require("../business-logic/auth-logic");
const isLoggedIn = require("../middleware/is-logged-in");
const isAdmin = require("../middleware/is-admin");
const router = express.Router();


//Get all vacations "http://localhost:3000/api/vacations"
router.get("/vacations", async (request, response) => {
    try {
        const vacations = await vacationLogic.getAllVacations();
        response.json(vacations);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

//Get vacations per user - Vacations user is following
router.get("/vacations/:userId", isLoggedIn, async (request, response) => {
    try {
        const userId = request.params.userId;
        const vacations = await vacationLogic.getUserVacations(userId);
        response.json(vacations);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

//Get vacations user is not following
router.get("/not-following-vacations/:userId", isLoggedIn, async (request, response) => {
    try {
        const userId = request.params.userId;
        const vacationsNotFollowing = await vacationLogic.getVacationUserNotFollowing(userId);
        response.json(vacationsNotFollowing);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

//Get all users
router.get("/users", isAdmin, async (request, response) => {
    try {
        const users = await vacationLogic.getAllUsers();
        response.json(users);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

//post vacation "http://localhost:3000/api/vacations"
router.post("/vacations", async (request, response) => {
    try {
        const vacation = request.body;
        const addedVacation = await vacationLogic.addVacation(vacation);
        response.status(201).json(addedVacation);

        //on every change the admin made, take all vacations and send back to client
        const vacations = await vacationLogic.getAllVacations();
        // global.socketServer.sockets.emit("update-available", vacations);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

//Delete vacation
router.post('/delete-vacation', async (req, res) => {
    try {
        const { vacationId } = req.body;
        await vacationLogic.deleteVacation(vacationId)
        // global.socketServer.sockets.emit("vacation-update", await vacationLogic.getAllVacations());
        //on every change the admin made, take all vacations and send back to client
        const vacations = await vacationLogic.getAllVacations();
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
    }
});

router.post('/unfollow-vacation', isLoggedIn, async (req, res) => {
    try {
        const { userId, vacationId } = req.body
        vacationLogic.unFollowVacation(userId, vacationId)
        const followedVacations = await vacationLogic.getUserVacations(userId);
        const unFollowedVacations = await vacationLogic.getVacationUserNotFollowing(userId);
        res.status(200).send({followedVacations, unFollowedVacations});
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})

router.post('/follow-vacation', isLoggedIn, async (req, res) => {
    try {
        const { userId, vacationId } = req.body;
        vacationLogic.followVacation(userId, vacationId);
        const followedVacations = await vacationLogic.getUserVacations(userId);
        const unFollowedVacations = await vacationLogic.getVacationUserNotFollowing(userId);
        res.status(200).send({followedVacations, unFollowedVacations});
    } catch (err) {
        console.log(err);
    }
})





module.exports = router; 