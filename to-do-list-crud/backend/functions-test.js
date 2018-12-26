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


console.log(getModel('/items/'));

console.log(getModel('/users/'));


