const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function(){
    //hooks
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(1000);

        value = 5;

        math.sum(value, 5, value => {
           // assert.equal(value , 10);
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiply two numbers', function(){
        const math = new Math();
        const obj = {
             name: 'Márcio de Jesus'
        };

        //assert.equal(math.multiply(value, 5), 5);
        //expect(math.multiply(value, 5)).to.equal(5);
        expect(obj).to.have.property('name');
    });
    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
           /*  load : sinon.spy() */
           load: function load(){
               console.log('Called!');
           }
        };

        //sinon.spy(res, 'load');
        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();
        math.printSum(req, res, 5, 5);
        //expect(res.load.calledOnce).to.be.true;
        //expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);
        expect(res.load.args[0][0]).to.equal('index');
    })
});

/* describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();
        assert.equal(math.sum(5, 5), 10)
    });
}); */
/* describe('Math class', function(){
    it('Sum two numbers', function(done){
        const math = new Math();
        math.sum(value, 5, (value) => {
            assert.equal(value , 10);
            done();
        })  
    });
}); */

//it.only executa somente um dos testes
//it.skip pula o teste 

//hook beforeEach(function())