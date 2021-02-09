/* var prop = 'teste Enhanced Object Literals';

function method(){
    console.log('method called');
}

var obj = {
    prop,
    method
};

console.log(obj.method);
obj.method(); */

/* var obj = {
    sum(a,b){
        return a+b;
    }
}

console.log(obj.sum(5,7)); */

var propName = 'test';

var obj = {
    [propName +' concat']: 'Prop value'
};

console.log(obj);