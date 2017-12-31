//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');
//console.log(ObjectID);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Succesfully');

    // code to find records using promise

    db.collection('users').find({ _id: new ObjectID('5a403460666e1209fd037336'), completed: false }).toArray().then((docs) => {
        console.log('users');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch users', err);


    });
    // code to get count using promise
    db.collection('users').find().count().then((count) => {
        console.log(`Users count: ${count}`);


    }, (err) => {
        console.log('Unable to fetch users', err);


    });

    db.close();
});