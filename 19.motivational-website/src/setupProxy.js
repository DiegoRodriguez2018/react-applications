// create-react-app is looking for this file, so naming is important. 
// This helps us to avoid the CORS error but its also very handy for API authentication. 

const proxy = require ('http-proxy-middleware');

module.exports = (app) => {
    app.use(proxy('/api',{target:'http://localhost:5000/'}))
}