const expect = require('expect');
const utils = require('./utils');
describe('utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(3, 6);

            expect(res).toBe(9).toBeA('number');



        });
        it('should  async add two numbers', (done) => {
            utils.asyncAdd(3, 4, (sum) => {
                expect(sum).toBe(7);
                done();
            })
        })

    });
    describe('#square', () => {
        it('should  async square of two numbers', (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).toBe(16);
                done();
            })
        })

        it('should square a number', () => {
            var res = utils.square(3);
            expect(res).toBe(9);
            expect(res).toBeA('number');


        });
    });

});



it('should expect some values', () => {
    expect(9).toNotBe(91);
    expect({ name: 'andrew' }).toEqual({ name: 'andrew' });
})

it('should verify firstName and lastName are set', () => {
    var user = { location: "plano", age: 32 };
    var res = utils.setName(user, "Samanth Reddy");

    expect(res).toInclude({
        firstName: 'Samanth',
        lastName: 'Reddy'
    });


});