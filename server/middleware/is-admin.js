
function isAdmin(req,res, next){
    if(!req.session.user){
        res.status(401).send("You r not logged in");
    }
    else if(request.session.user.isAdmin = 0){
        res.status(403).send("You r not admin");
    }
    else {
        next();
    }
}

module.exports = isAdmin;