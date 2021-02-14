const assert = require('assert');
const Math = require('../src/math.js');

/* describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();
        assert.equal(math.sum(5, 5), 10)
    });
}); */
describe('Math class', function(){
    it('Sum two numbers', function(done){
        const math = new Math();
        math.sum(5, 5, (value) => {
            assert.equal(value , 10);
            done();
        })  
    });
});

//it.only executa somente um dos testes
//it.skip pula o teste 

//hook beforeEach(function())