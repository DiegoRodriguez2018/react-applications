const express = require ('express')
const cors = require ('cors')


const app = new express();
const port = 5000;

let users =[{username:"user1", password:123456, role:"role1"},{username:"user2", password:123456, role:"role2"}]

app.use(cors());
//if we dont use express.json() we dont have acces to req.body
app.use(express.json())

app.get('/users', (req,res) => {
    return res.send(users)
})

app.get('/users/:id', (req,res) => {
    const { id } = req.params;
    return res.send(users[id]);
})

// app.put('/users', (req,res) => {
//     console.log('req.body',': ', req.body);
//     // const { id } = req.params;

//     return res.send("");
// })
function updateUser(username, password, role,  i) {
    users[i].username = username
    users[i].password = password
    users[i].role = role
    console.log('triggered')
  }

app.put('/auth/update', (req, res) => {
    const {username, password, role} = req.body
    for (let i=0; i<users.length; i++) {
        console.log('for loop')
        if (username === users[i].username) {
            console.log('found')
            updateUser(username, password, role, i);
        return;
      }
    }
    return res.send('user updated')
  });

app.post ('/auth/register', (req,res) => {
    console.log(req.body);
    return res.send('user authenticated')
})

app.listen(port, ()=> {
    console.log("listening to port", port);
})