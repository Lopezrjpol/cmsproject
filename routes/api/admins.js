const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const Admin = require("../../Models/Admin");


router.post("/register", (req,res) => {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }

    Admin.findOne({ email: req.body.email }).then(returnedStuff => {

        if(returnedStuff){
            return res.status(400).json({ email: "Email already exists" });
        }
    });

    const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if(err) throw err;
            newAdmin.password = hash;
            newAdmin
                .save()
                .then(admin => res.json(admin))
                .catch(err => console.log(err));
        });
    });
});

router.post("/login", (req,res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }

    const email = req.body.email;
    const password = req.body.password;

    Admin.findOne({ email: email }).then(admin => {
        if(!admin){
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        bcrypt.compare(password, admin.password).then(isMatch => {
            if(isMatch){
                const payload= { id: admin.id, name: admin.name };
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 }, (err, token) => {
                    res.json({ success: true, token: "Bearer" + token });
                    }
                );
            } else {
                return res.status(400).json({ inputincorrect: "Password or Email is incorrect" });
            }
        });
    });
});



module.exports = router;