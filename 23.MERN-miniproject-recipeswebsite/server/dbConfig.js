//configuring mongoose
require('dotenv').load();
const mongoose = require('mongoose');

const driver = process.env.DB_PROD_DRIVER;
console.log('driver',': ', driver);

mongoose.connect(driver);
mongoose.connection.on('connected', () => {
    console.log('connected to mongod');
    console.log('-------------------------------');
});
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
});