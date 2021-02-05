const myNumber = 12.4053;

//transformar número para string
const numberAsString = myNumber.toString();
console.log('\nNúmero transformado em string: ', typeof numberAsString);

//retorna o número com a quantidade de casas decimais designada
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero de casas decimais: ', fixedTwoDecimals);

//transforma uma string em float
console.log('\nstring parseada para floart: ', parseFloat('13.22'));

//transforma uma strin em inteiro
console.log('\nstring parseada para int: ', parseInt('13.22'));