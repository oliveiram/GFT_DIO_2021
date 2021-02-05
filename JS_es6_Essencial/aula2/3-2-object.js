const user = {
    name: 'Marcio',
    lastName: 'Oliveira'
}

//recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//recupera os valores das chaves do objeto
console.log('\nValores das Propriedades do objeto user: ', Object.values(user));

//retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de Propriedades e valores do objeto user: ', Object.entries(user));

//mergear propriedades de objetos
Object.assign(user, {fullName: 'Márcio Oliveira'} );

console.log('\nAdiciona a prpriedade Fullname no objeto user: ', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age: 37}));

//previne todas as alterações em um objeto
const newObject = {foo: 'bar'};
Object.freeze(newObject);

newObject.foo = 'changes';
delete newObject.foo;
newObject.bar = 'foo';

console.log('\nVariável newObject após as alterações: ', newObject);

//Permite apenas alterações em propriedades já existentes em um objeto
const person = {name: 'Marcio'};
Object.seal(person);

person.name = 'Oliveira';
delete person.name;
person.age = 37;

console.log('\nVariável person após as alterações: ', person);