'use strict';
/*
const myText = String('Hello pototype');

console.log(myText.split(''));
console.log(myText.__proto__.split === String.prototype.split);
*/
/*
const myText = 'Hello Prototype';
myText.constructor -> String;
myText.__proto__ -> String.prototype;
*/
// function Animal(){}
// console.log(Animal.constructor);

function Animal(){
    this.qtdPatas = 4;
}
const cachorro = new Animal();
console.log(cachorro.__proto__ === Animal.prototype);
console.log(Animal.__proto__ === Function.prototype );

/* function Pessoa(name){
    this.name = name;
}
const p = new Pessoa('Marcio');
console.log(p); */