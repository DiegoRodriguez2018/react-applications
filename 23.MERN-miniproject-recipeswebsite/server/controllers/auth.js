const express = require('express');
const router = express.Router();

const passport = require('passport');
const cookieSession = require('cookie-session');
const LocalStrategy = require('passport-local').Strategy; 

const User = require('../models/User');

// SETTING UP PASSPORT:
//setup sessions for users, we need to know what user is login and be able to send back a cookie for that user. 
// tell passport how to serialize and deserialize the user. 
// initalize passport 
// tell passport how to authenticate with local strategy. 
// implemnent a custom authenticate callback to control response messages. 

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}            

const tenMinutes = 10 * 60 *1000; //miliseconds
const cookie = cookieSession({
    maxAge: tenMinutes,  
    keys: [process.env.COOKIE_SECRET_KEY] 
});

//INITIALIZING PASSPORT:
router.use(cookie);
router.use(passport.initialize());
router.use(passport.session());

//SERIALIZING  the user
passport.serializeUser((user, done) => {
    //we need to tell passport what will be done()
    done(null, user.username);
    //done (ERROR, user, INFO);
    //as a convention the first paramter is an error, the second the user, and the third will be info. 
    // note in this case the ERROR is null but we can pass a string or an new Error instance. 
    //passport instead of returning the response it passes the error to the next middleware. 
})

//DESERIALIZING the user:
//this process takes the cookie identifier (username) and turn into a in-memory object. 
passport.deserializeUser((username, done) => {
    User.findOne({ username })
        .then(doc => done(null, doc))
        .catch(err => done(err, null))
    // note that if we find the doc we pass it in the second paramater and null as an error in the first parameter.
    // if there is an error we pass it in the first parameter, and we send null as the user 
})

//SETTING UP LOCAL STRATEGY
// we tell passport how to deal with the input. 
passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if (err) {
                //SERVER ERROR.
                return done(err)
                //remember arguments order: done(error,user, info);
            }
            if (!user) {
                return done(null, null, { message: "Incorrect credentials" })
            }
            if (user.password !== password) {
                return done(null, null, { message: "Incorrect credentials" })
            }
            return done(null, user)
        })
        // note you can do this with the promise syntax as well but the callback is a bit more clear. 
    }
))


// Authenticating the user
const authenticateUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err)
        }
        if (!user) {// if passport user object does not exist. 
            res.status(401).send(info.message); //this comes from our LocalStrategy setup
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.send(`Successfully authenticated. Welcome ${req.user.username}`)
        })
    })(req, res, next); //binding req,res and next
}

//isAuthenticated middleware does only one thing: 
// Checks that there is an user (cookie). If there is not sends back an error. If there is calls next();
const isAuthenticated = (req, res, next) => {
    console.log('req.user', ': ', req.user);
    if (!req.user) {
        return res.status(403).send('Not authorised, please login.')
    }
    next();
}

//USING PASSPORT:
//After implementing passport, logging in,  accessing the user data and loggin out is easy. 

//LOGIN
router.post('/login', authenticateUser);

//SENDING BACK USER DATA
// Note this path will display the info of the user that has logged in. 
router.get('/me', isAuthenticated, (req, res) => {
    res.send(req.user); 
})

//LOGOUT :
router.get('/logout', isAuthenticated, (req, res) => {
    const { username } = req.user;
    req.logout();
    res.send(`${username} Successfully logged out.`)
})


const register = (req, res) => {
    const { username, password } = req.body;
    if (username.length>1 && password.length>1){
        // console.log('username',': ', username);
        // console.log('password',': ', password);

        User.create({username, password})
        
        return res.send(`User ${username} created`);
    }else{
        return res.status(401).send("Please enter username and password");
    }
}


router.post('/register', register );


router.get('/recipes', isAuthenticated,  (req,res)=>{
    Recipe.find({}).
    populate('ingredientsInRecipe').
    exec((err,docs)=>{
        return res.send(docs);
    })
});

module.exports=router;