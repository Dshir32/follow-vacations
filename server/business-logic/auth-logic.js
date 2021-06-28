const dal = require("../data-access-layer/dal");

async function register(user){
    const sql = `insert into users(firstName, lastName, userName, password, isAdmin) 
    values('${user.firstName}', '${user.lastName}', '${user.userName}', '${user.password}',0)`; // 0 = not admin
    const info = await dal.executeAsync(sql);
    user.userId = info.insertId;
    return user;
}

async function login(username, password){
    const sql = `select *
    from users 
    where userName = '${username}'
    and password = '${password}'`;
    const userData = await dal.executeAsync(sql);
    return userData[0]
}

async function isAdmin(userName){
    const sql = `select * from users where userName = '${userName}'`;
    const info = await dal.executeAsync(sql);
    if(info.isAdmin === 1){
        return true;
    }
    return false;
}

async function isUserExists(userName) {
    const sql = `SELECT * FROM users WHERE userName = '${userName}'`;
    const info = await dal.executeAsync(sql);
    if(info.length > 0) {
        return true;
    }
    return false;    
}




module.exports = {
    register,
    login,
    isAdmin,
    isUserExists
};