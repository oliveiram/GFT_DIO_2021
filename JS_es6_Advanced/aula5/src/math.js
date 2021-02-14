/* class Math{
    sum(a,b) {
        return a+b;
    }
} */
/* class Math{
    sum(a,b, callback) {
        setTimeout(() => {
            callback(a+b);
        }, 5);
        
    }
} */
class Math{
    sum(a,b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 2500);  
    }

    multiply(a, b){
        return a * b;
    }


    //Sinon
    printSum(req, res, a, b){
        //res.load('index', a + b);
        console.log(res.load('index', a + b));
    }
}

module.exports = Math;