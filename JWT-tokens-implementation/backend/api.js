const express = require('express');
const cors = require ('cors');

//configuring mongoose 
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/userDatabase`);
mongoose.connection.on('connected', () => {
    console.log('connected to mongod');
    console.log('-------------------------------');
});
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
});


const app = express();
const port = 3500;

app.use(cors());
//by doing this here we are telling express to use express.json() in all the app. 
app.use(express.json());

//we are telling app to use everything in the controllers folder.
app.use(require('./controllers'))



app.listen(port, () => {
    console.log(`listening on ${port}`);
});