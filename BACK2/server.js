require('dotenv').config();

let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const utils = require('./utils');
const jwt = require('jsonwebtoken');
let database = require('./database/db');


const userContact = require('../BACK2/routes/comment')

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();

const userData = {
    userId: "789789",
    password: "cbon",
    name: "Clue Mediator",
    username: "cmoi",
    isAdmin: true
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});
app.use('/contacts', userContact)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue

    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) {
            return res.status(401).json({
                error: true,
                message: "Invalid user."
            });
        } else {
            req.user = user; //set the user to req so other routes can use it
            next();
        }
    });
});


// request handlers
app.get('/', (req, res) => {
    if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
    res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
});


// validate the user credentials
app.post('/users/signin', function (req, res) {
    const user = req.body.username;
    const pwd = req.body.password;

    // return 400 status if username/password is not exist
    if (!user || !pwd) {
        return res.status(400).json({
            error: true,
            message: "Username or Password required."
        });
    }

    // return 401 status if the credential is not match.
    if (user !== userData.username || pwd !== userData.password) {
        return res.status(401).json({
            error: true,
            message: "Username or Password is Wrong."
        });
    }

    // generate token
    const token = utils.generateToken(userData);
    // get basic user details
    const userObj = utils.getCleanUser(userData);
    // return the token along with user details
    return res.json({ user: userObj, token });
});


// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token;
    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required."
        });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) return res.status(401).json({
            error: true,
            message: "Invalid token."
        });

        // return 401 status if the userId does not match.
        if (user.userId !== userData.userId) {
            return res.status(401).json({
                error: true,
                message: "Invalid user."
            });
        }
        // get basic user details
        var userObj = utils.getCleanUser(userData);
        return res.json({ user: userObj, token });
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});