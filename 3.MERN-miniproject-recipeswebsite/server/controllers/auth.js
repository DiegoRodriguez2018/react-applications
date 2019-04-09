const passport = require('passport');
const router = require('express').Router();
const User = require('../models/User');

//POST new user route (optional, everyone has access)
//working
router.post('/register', (req, res, next) => {
  const user = req.body;        
  console.log('user',': ', user);
  if(!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }
  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }
  //creating a new instance of user
  const newUser = new User(user);
  //hashing password
  newUser.hashPassword(user.password);
  //saving and returning token
  return newUser.save()
    .then(() => res.json({ user: newUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post('/login', (req, res, next) => {
  const user = req.body
  console.log('user',': ', user);
  if(!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }
  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }


  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {

    if(err) {
      return next(err);
    }

    //Note that passportUser is a mongoose model.
    // console.log('passportUser',': ', passportUser);
    
    if(passportUser) {
      console.log('req.user',': ', req.user);
      
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return res.status(400).send(info);
  })(req, res, next);
});

router.get('/', (req,res)=>{
  return res.send("auth route working")
})

module.exports = router;