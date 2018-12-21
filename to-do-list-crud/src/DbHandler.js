const setup = () => {
    const mongoose = require('mongoose');
    //configuring mongoose 
    mongoose.connect('mongodb://localhost:27017/toDoList');
    mongoose.connection.on('connected', () => {
        console.log('connected to mongod');
    });
    mongoose.connection.on('error', () => {
        console.log('failed to connect to mongod');
    });
}

const getAll = (req, res) => {
    const ToDoList = require('./models/ToDoList');
    ToDoList.find({})
        .then(doc => res.json(doc));
}

const getOne = (req, res) => {
    //find the item with the same id
    const ToDoList = require('./models/ToDoList');

    const { id } = req.params;

    ToDoList.find({ id: parseInt(id) })
        .then(doc => res.json(doc));
}

const post = (req, res) => {
    const ToDoList = require('./models/ToDoList');

    ToDoList.find().exec(function (err, results) {
        const count = results.length
        if (count > 0) {
            console.log('count', ': ', count);
            const item = new ToDoList({ id: (count + 1), item: req.body.item });
            item.save();
        } else {
            const item = new ToDoList({ id: 1, item: req.body.item });
            item.save();
        }
        return count;
    })

    return res.send({ message: "Post received" });
}

const deleteAll = (req, res) => {
    const ToDoList = require('./models/ToDoList');

    ToDoList.deleteMany({}, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.end('success');
        }
    }
    );
    return res.send({ message: "Delete request received" });
}


const deleteOne = (req, res) => {
    const ToDoList = require('./models/ToDoList');

    //note req.params.id is a string
    const { id } = req.params;

    ToDoList.deleteOne({ id: parseInt(id) }, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.end('Item deleted.');
        }
    }
    );
    return res.send({ message: "Delete one request received" });
}


module.exports = { setup, getAll, getOne, post, deleteAll, deleteOne };