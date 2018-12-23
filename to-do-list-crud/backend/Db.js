let Model = null;

function Db (modelName) {
    this.modelName = modelName; 
    Model = require(`./models/${modelName}`);
}

Db.prototype.setup = function () {
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

Db.prototype.getAll = function(req, res){
    Model.find({})
        .then(doc => res.json(doc));
}

Db.prototype.getOne = function (req, res){
    //find the item with the same id
    const { id } = req.params;
    Model.find({ id: parseInt(id) })
        .then(doc => res.json(doc));
}

Db.prototype.post = function (req, res) {
    Model.find().exec(function (err, results) {
        const count = results.length
        if (count > 0) {
            console.log('count', ': ', count);
            const item = new Model({ id: (count + 1), item: req.body.item });
            item.save();
        } else {
            const item = new Model({ id: 1, item: req.body.item });
            item.save();
        }
        return count;
    })
    return res.send({ message: "Post received" });
}


Db.prototype.deleteAll = function (req, res){
    Model.deleteMany({}, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.end('success');
        }
    }
    );
    return res.send({ message: "Delete request received" });
}

Db.prototype.deleteOne = function (req, res){
    //note req.params.id is a string
    const { id } = req.params;

    Model.deleteOne({ id: parseInt(id) }, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.end('Item deleted.');
        }
    }
    );
    return res.send({ message: "Delete one request received" });
}

module.exports = Db;