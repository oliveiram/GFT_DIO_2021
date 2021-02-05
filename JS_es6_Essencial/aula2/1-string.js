//retorna o tamanho da string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//retorna um array quebrando o texto separado por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\narray com as posições separadas pelo delimitador: `, splittedText);

//substituição de valor
const replacedText = 'Texto'.replace('Text', 'novoText');
console.log(`\nSubstituição de valor: `, replacedText);

//retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log(`\nUltima letra de uma string: `, lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`\nvalor da string menos a ultima letra: `, allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log(`\nValor da segunda string até a última: `, secondToEnd);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`\nValor das duas primeiras letras: `, twoCharsBeforeFirstPos);