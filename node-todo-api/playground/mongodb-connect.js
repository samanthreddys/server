//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Succesfully');

    db.collection('users')
        .insertOne({

            name: 'samanth',
            location: 'UnitedStates',
            age: 32,
            completed: true
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert record into collection users', err);
            }
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
        });

    /* db.collection('Todos')
        .insertOne({
            text: "Hello",
            completed: false
        }, (err, result) => {
            if (err) {
                return console.log("Unable to insert collection Todos", err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        });
*/



    db.close();

});