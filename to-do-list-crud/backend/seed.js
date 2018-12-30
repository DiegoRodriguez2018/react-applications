const mongoose = require('mongoose');

//configuring mongoose 
const databaseName = 'myList'

mongoose.connect(`mongodb://localhost:27017/${databaseName}`);
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});


const handleError = (error) => {
    if (error){
        console.log(error);
    }
}


const Item = require('./models/Item');

Item.deleteMany({}, err => {
  if (err) {
      console.log(err)
  } else {
      console.log("Item collection restarted.")
  }
})


for (let index = 1; index <= 10; index++) {
  Item.create({id:index, item: `Item # ${index}`},handleError);
}

// const userSchema = new mongoose.Schema({
//   id: Number,
//   username: String,
//   password: String,
// }, {collection: 'users'});

const User = require('./models/User');


User.deleteMany({}, err => {
    if (err) {
        console.log(err)
    } else {
        console.log("User collection restarted.")

        const user1 = {
            id: 1,
            username: "user1",
            password: "password1"
          }
          

        User.create(user1, ()=> {
            console.log("Seeding was successful.");
            mongoose.disconnect()
        } );
        

    }
})




