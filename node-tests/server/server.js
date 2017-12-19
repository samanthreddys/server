const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'page not found',
        name: 'application v1'
    });

});

app.get('/users', (req, res) => {
    res.send([{
            name: 'sam',
            age: 32
        }, {
            name: 'chaitu',
            age: 26
        }, {
            name: 'manu',
            age: 3
        }]


    );
})
app.listen(3000);
module.exports.app = app;