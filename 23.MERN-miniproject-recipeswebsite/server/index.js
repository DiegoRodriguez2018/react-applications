const express = require('express');
const cors = require ('cors');

console.clear();
require('./dbConfig');

const app = express();
const port = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => res.send('Connected to API'));

app.use(require('./controllers'));

app.listen(port, () => {
    console.log(`listening on ${port}`);
});