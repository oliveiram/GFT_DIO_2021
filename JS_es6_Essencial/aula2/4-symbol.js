const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
//  console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

//prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user ={
    [nameSymbol1]: 'Marcio',
    [nameSymbol2]: 'outro nome',
     lastName: 'Oliveira'
}
/*
console.log(user);

//Symbols criam propriedades que não são enumerables
for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}
*/
/*
//console.log('Propriedades do objeto user: ', Object.keys(user));
//console.log('Valor das propriedades do objeto user: ', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do Objeto
console.log('Todas as propriedades do objeto user: ', Reflect.ownKeys(user));
*/
//criar um enum
const directions = {
    UP: Symbol('UP'),
    DOWN:  Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};

console.log(Object.getOwnPropertySymbols(directions));
console.log(Reflect.ownKeys(directions));