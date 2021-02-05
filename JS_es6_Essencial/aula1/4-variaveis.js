/*
var nameVar = 'Márcio';
let nameLet = 'Márcio';
const nameConst = 'Márcio';

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);

var test = 'exemplo';
(() =>{
    console.log(`valor dentro da função "${test}`);

    if(true){
        var test = 'exemplo';
        console.log(`valor dentro do if "${test}`);
    }

    console.log(`valor após execução do if "${test}`);
})();
*/
/*

(() =>{
    let test = 'valor função';
    console.log(`valor dentro da função "${test}`);

    if(true){
        let test = 'valor if';
        console.log(`valor dentro do if "${test}`);
    }

    console.log(`valor após execução do if "${test}`);
})();
*/

const name = 'Marcio';

//não podemos alterar o valor
//name = 'outro nome';

const user = {
    name: 'Marcio'
}

//mas se for um objeto podemos trocar suas propriedades
user.name = 'Samuel';

//não podemos fazer o objeto "apontar" para outro lugar
/*user = {
    name = 'Oliveira'
}
*/
const persons = ['Pedro', 'João', 'Maria'];

//podemos adicionar novos itens
persons.push('Edivaldo');


//podemos remover algum item
persons.shift();

//podemos alterar
persons[0] = 'Kelly';
console.log('\nArray após alterações: ', persons);
