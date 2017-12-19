var db = require('./db');
module.exports.hanldeSignUp = (email, password) => {
    //check email already exists
    //save user to db
    db.saveUser({
        email: email,
        password: password

    });
    //send welcome email

};