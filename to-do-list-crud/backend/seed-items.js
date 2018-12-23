const mongoose = require('mongoose');

//configuring mongoose 
mongoose.connect('mongodb://localhost:27017/toDoList');
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});

const Item = require('./models/Item');

// User.deleteMany({}, err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("User collection restarted.")
//     }
// })

Item.create({id:3, item: "learn mongoose"}, error => {
    if (!error){
        console.log("Seeding was successful.")
    }
});


// const newItem = new Item(;
// newItem.save();

