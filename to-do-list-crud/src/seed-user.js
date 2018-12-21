const mongoose = require('mongoose');

//configuring mongoose 
mongoose.connect('mongodb://localhost:27017/toDoList');
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});

const ToDoList = require('./models/ToDoList');
const User = require('./models/User');

User.deleteMany({}, err => {
    if (err) {
        console.log(err)
    } else {
        console.log("User collection restarted.")
    }
})

const newUser = new User({id:1, username: "user1", password:"password1"});
newUser.save();




