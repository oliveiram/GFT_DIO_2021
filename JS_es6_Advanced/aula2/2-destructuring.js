//modo anterior

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var obj = {
    name: 'Márcio',
    props: {
        age: 37,
        favoriteColors: ['black', 'blue']
    }
};

///destructuring assignment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

var {name} = obj;
var {props : {age: age2, favoriteColors:[color1, color2]} } = obj;

console.log(apple, apple2, tomato, tomato2, name, age2, color1, color2);