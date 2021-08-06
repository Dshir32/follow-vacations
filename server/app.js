global.config = require(process.env.NODE_ENV === "production" ? "./config-prod" : "./config-dev");
const express = require("express");
const vacationController = require("./controllers/vacations-controller");
const authController = require("./controllers/auth-controller");
const cookieSession = require('cookie-session')
const cors = require("cors");
const app = express();
const path = require("path");

//Creating express app
app.use(express.json());

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(cors({
    origin:["http://localhost:3001","https://anywhere-you-wanna-go.herokuapp.com"], //Address of the client 
    credentials: true //allows session cookie
}));


//Expose index.html - also For getting the images
app.use(express.static(path.join(__dirname, "./_front-end"))); 
// app.use(express.static(__dirname)); 

app.use("/auth", authController);
app.use("/api", vacationController);

app.use("*", (request,response) => {
    response.sendFile(path.join(__dirname, "./_front-end/index.html"));
})

const port =  process.env.PORT || 3000;
// Serving express app - uploading it to the air but getting back listener object
app.listen(port, () => console.log(`listening on port ${port}, Go to http://localhost:${port}`));