function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function getModel(path) {
    // adding an extra '/' just in case it doesn't have one at the end 
    path = path + '/'
    const myRe = /\/(.*?)\/\s?/g;
    const regexResult = myRe.exec(path);
    let model = regexResult[1]
    model = model.slice(0,-1);
    model = capitalize(model);
    return model;
}

class Db {
    constructor() {

    }

    setup() {
        const mongoose = require('mongoose');
        //configuring mongoose 
        mongoose.connect('mongodb://localhost:27017/toDoList');
        mongoose.connection.on('connected', () => {
            console.log('connected to mongod');
            console.log('-------------------------------');
        });
        mongoose.connection.on('error', () => {
            console.log('failed to connect to mongod');
        });
    }

    getAll(req, res) {
        console.log("getAll");
        //eg. req.path = /items/
        console.log('req.path', ': ', req.path);
        const modelName = getModel(req.path);
        console.log('modelName', ': ', modelName);
        const Model = require(`./models/${modelName}`);
        Model.find({})
            .then(doc => res.json(doc));
    }

    getOne(req, res) {
        console.log("getOne");
        //eg. req.path = /items/1
        console.log('req.path', ': ', req.path);
        const modelName = getModel(req.path);
        const Model = require(`./models/${modelName}`);
        //find the item with the same id
        const { id } = req.params;
        Model.find({ id: parseInt(id) })
            .then(doc => res.json(doc));
    }

    post(req, res) {
        //eg. req.path = /items/
        console.log('req.path', ': ', req.path);
        const modelName = getModel(req.path);
        const Model = require(`./models/${modelName}`);

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


    deleteAll(req, res) {
        //eg. req.path = /items/
        console.log('req.path', ': ', req.path);
        const modelName = getModel(req.path);
        const Model = require(`./models/${modelName}`);


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

    deleteOne(req, res) {
        console.log("deleteOne");
        //eg. req.path = /items/
        console.log('req.path', ': ', req.path);
        const modelName = getModel(req.path);
        const Model = require(`./models/${modelName}`);

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

}



module.exports = Db;