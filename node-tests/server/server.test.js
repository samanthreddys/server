const supertest = require('supertest');
const expect = require('expect');

var app = require('./server').app;
describe('#SERVER', () => {
    describe('#GET/', () => {
        it('should return Hello Express response', (done) => {
            supertest(app)
                .get('/')

            .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'page not found'
                    });
                })
                .end(done);
        })

    });


    describe('#GET/users', () => {
        it('should return user exists in array', (done) => {
            supertest(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'manu',
                        age: 3
                    });
                })
                .end(done);
        })
    });
});