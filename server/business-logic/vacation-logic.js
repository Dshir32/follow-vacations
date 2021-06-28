const dal = require("../data-access-layer/dal");

async function getAllVacations(){
    const sql =`SELECT vacations.*, count(followers.vacationID) as totalFollowers 
    FROM vacations 
    LEFT JOIN followers 
    ON vacations.vacationId = followers.vacationID 
    GROUP BY vacations.vacationId`;
    const vacations = await dal.executeAsync(sql);
    return vacations;
}

async function getUserVacations(userId){
    const sql =`SELECT vacations.* FROM vacations 
    join followers on followers.vacationID = vacations.vacationId
    where followers.userId =` + userId;
    const vacationsPerUser = await dal.executeAsync(sql);
    return vacationsPerUser; 
}

async function getVacationUserNotFollowing(userId){
    const sql =`SELECT * FROM vacations 
    where vacationId not in (SELECT DISTINCT v.vacationId 
        FROM vacations as v 
        join followers 
        on followers.vacationID = v.vacationId 
        where followers.userId =${userId})`;
    const vacationsNotFollowing = await dal.executeAsync(sql);
    return vacationsNotFollowing;
}

async function getAllUsers(){
    const sql = `select * from users`;
    const users = await dal.executeAsync(sql);
    return users;
}

async function addVacation(vacation){
    const sql = `INSERT INTO vacations 
    (destination, description, startDate, endDate, price, vacationImg) 
    VALUES ('${vacation.destination}', '${vacation.description}', '${vacation.startDate}', 
        '${vacation.endDate}', ${vacation.price}, "somewhere.jpg")`;

    const info = await dal.executeAsync(sql);
    vacation.vacationId = info.insertId;
    vacation.vacationImg = "somewhere.jpg"
    return vacation;
}

async function deleteFromFollowers(vacationId){
        const sqlDeleteFollowers = `DELETE FROM followers WHERE vacationID = ${vacationId}`;
        await dal.executeAsync(sqlDeleteFollowers);
}

async function deleteVacation(vacationId){
        deleteFromFollowers(vacationId);
        const sqlDeleteVacation = `DELETE FROM vacations WHERE vacationId = ${vacationId}`;
        await dal.executeAsync(sqlDeleteVacation);
}

async function unFollowVacation(userId, vacationId) {
    const sqlQuery = `delete from followers where vacationID = ${vacationId} and userId = ${userId}`
    await dal.executeAsync(sqlQuery)

}

async function followVacation(userId, vacationId) {
    const sqlQuery = `insert into followers(vacationId, userId) VALUES ('${vacationId}', '${userId}')`
    await dal.executeAsync(sqlQuery);
}


module.exports = {
    getAllVacations,
    getUserVacations,
    getVacationUserNotFollowing,
    getAllUsers,
    addVacation,
    deleteVacation,
    unFollowVacation,
    followVacation
}