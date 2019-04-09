const User = require('../models/User')
const router = require('express').Router();

router.get('/', (req,res)=>{
    return res.send("public route working")
  })

  router.get('/users', (req,res)=>{
    
    User.find({})
    .then (doc=>{
      return res.send(doc);
    })
    .catch(err=>{
      return res.send(err);      
    })
  })

module.exports = router;
