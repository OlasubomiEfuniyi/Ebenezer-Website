var express = require("express");
var v = require("../public/javascripts/validator");
const mongoCredentials = require("../credentials/mongoCredentials");
var nodemailer = require('nodemailer');

var router = express.Router();

let validator = new v.Validator();

router.post("/parent-portal-login", function(req, res, next) {
    let body = req.body;
    let username = body.username;
    let password = body.password;
    
    //Validate the username and password
    if(validator.validate(username, v.USERNAME) && validator.validate(password, v.PASSWORD)) {
        const MongoClient = require('mongodb').MongoClient;
        const uri = `mongodb+srv://${mongoCredentials.username}:${mongoCredentials.password}@cluster0-l2odh.mongodb.net/test?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        client.connect(err => {
            const collection = client.db("parents").collection("credentials");
            collection.findOne({username: username, password: password}, function(err, result) {
                if(err) {
                    console.log("Error while attempting to retrieve credentials");
                    throw err;
                } else {
                    if(result) {
                        res.status(200);
                        console.log(result.firstName);
                        res.send({firstName: result.firstName, lastName: result.lastName, username: result.username});
                    } else {
                        res.status(500);
                        res.send();
                    }
                }
            });
            client.close();
        });
    } else {
        res.status(500);
        res.send();
    }

    //Determine if the username and password pair is in the database
});

router.post("/send-mail", function(req, res, next) {
    const emailAddress = "subsefun@gmail.com";
    const password = "subomi1999";

    let body = req.body;
    let fullName = body.fullName;
    let email = body.email;
    let phoneNumber = body.phoneNumber;
    let question =  body.question;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailAddress,
            pass: password
        }
    });

    let mailOptions = {
        from: emailAddress,
        to: emailAddress,
        subject: "Question from Website",
        text: `Sender: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber} \nQuestion: ${question}`
        
    };

    transporter.sendMail(mailOptions).then((info) => {
        res.status(200);
        res.send();
    }).catch((error) => {
        console.log(`Error while attempting to send email: ${error}`);
        res.status(500);
        res.send();
    });
});

module.exports = router;