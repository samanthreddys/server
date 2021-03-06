const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('manu', 3);
        expect(spy).toHaveBeenCalled();

    });
    it('should call the saveUser correctly', () => {
        var email = 'samanthreddys';
        var password = '12345';

        app.hanldeSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });


    });


});