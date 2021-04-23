const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");


const app = express();
const admins = require("./routes/api/admins");

app.use(
    bodyParser.urlencoded({
        extended:false
    })
);

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose.connect( db, {useNewUrlParser: true} )
    .then(() => console.log("Connected to Database"))
    .catch(err=> console.log(err));


app.use(passport.initialize());
require("./config/passport")(passport);


app.use("/api/admins", admins);

app.listen(8000, () => console.log("Server is running"));

