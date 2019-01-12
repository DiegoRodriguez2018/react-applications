const express = require('express');
const cors = require('cors');

const app = new express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  return res.send({ message: 'hello from api'});
});

app.post('/api', (req, res) => {
  const { username } = req.body;
  console.log(username)
  return res.send({ message: 'Hey, I got your post request' });
});

app.post('/api/authed', (req, res) => {
  const { username, password } = req.headers;
  const { newName } = req.body;
  console.log(newName)
  if(username === 'admin' && password === 'password') {
    return res.send({ message: 'Welcome admin!' });
  } else {
    return res.send({ message: 'You are not authorised' });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});