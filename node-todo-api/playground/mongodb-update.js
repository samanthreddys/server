const { MongoClient, ObjectID } = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Succesfully');

    //delete many
    /*     db.collection('users').deleteMany({ name: 'hello' }).then((result) => {
            console.log('users');
            console.log(JSON.stringify(result, undefined, 2));

        }, (err) => {
            console.log('Unable to fetch users', err);


        }); */


    // delete one
    /* 
        db.collection('users').deleteOne({ name: 'hello' }).then((result) => {
            console.log('users');
            console.log(JSON.stringify(result, undefined, 2));

        }, (err) => {
            console.log('Unable to fetch users', err);


        }); */



    // findOne and delete
    /*     db.collection('users').findOneAndUpdate({ name: 'Hi' }, {
                $set: { name: "Helo" },
                $inc: { age: -26 }
            },
            false).then((result) => {
            console.log('users');
            console.log(JSON.stringify(result, undefined, 2));

        }, (err) => {
            console.log('Unable to fetch users', err);


        });
     */
    db.collection('users').update({ name: 'Hello' }, {
        $set: { name: "Hi" },
        $inc: { age: -26 }
    }, { upsert: true, multi: true }).then((result) => {
        console.log('users');
        console.log(JSON.stringify(result, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch users', err);


    });







    db.close();
});