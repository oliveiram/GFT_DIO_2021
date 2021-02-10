//rest operator, spread operator, 
/* function sum(...args){
    return args.reduce((acc, value) => acc+value, 0);
}

const multply = (...args) => args.reduce((acc, value) => acc*value, 1);

console.log(sum(1,1,1,1,1,1,1,1));

console.log(multply(2,2,2)); */

const str = 'Digital Innovation One';

function logArgs(...args){
    console.log(args);
}

logArgs(...str);