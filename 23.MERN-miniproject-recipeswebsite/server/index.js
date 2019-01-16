const express = require('express');
const cors = require ('cors');

console.clear();
require('./db');

const app = express();
const port = 3500;

app.use(cors());
app.use(express.json());

app.use(require('./controllers'));

app.listen(port, () => {
    console.log(`listening on ${port}`);
});