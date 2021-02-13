/* function multiply(a, b){
    b = typeof b === 'undefined' ? 1 : b;
    return a*b;
}
console.log(multiply(0));

function multiplys(a, b = 1){
    return a*b;
}
console.log(multiplys(0));
 */

//lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}

function multRandom(a, b = randomNumber()){
    return a*b;
}
console.log(multRandom(5, undefined));