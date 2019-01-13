const MongooseHandler = require('./MongooseHandler')
const Db = new MongooseHandler(); 

class ResourcesGenerator {
    constructor(routeName) {
        this.routeName = routeName;
        console.log('routeName', ': ', routeName);
    }
    //generate takes app as argument so we dont need to declare it in this module. 
    generate(app) {
        console.log('generated');
        console.log('this.routeName', ': ', this.routeName);
        
        app.get(`/${this.routeName}`, Db.getAll);
        app.get(`/${this.routeName}/:id`, Db.getOne);
        app.post(`/${this.routeName}`, Db.post);
        app.delete(`/${this.routeName}`, Db.deleteAll);
        app.delete(`/${this.routeName}/:id`, Db.deleteOne);
    }
}

module.exports = ResourcesGenerator;