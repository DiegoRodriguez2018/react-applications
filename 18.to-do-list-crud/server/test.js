const mongoose = require('mongoose');

const shutDownGracefuly = () => {
  process.on('SIGINT', function () {
    console.log("Shutting down gracefuly.");
    setTimeout(function(){
      console.clear();
      process.exit();
    }, 800);
  });
}

console.clear();

mongoose.connect(`mongodb://localhost:27017/myList`);
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});


const Item = require('./models/Item');

console.log('Item',': ', Item.schema);



shutDownGracefuly();




