const arr = Array(5);
// Cria um array com 5 posições vazias

const arrayWithParam = Array ('1, 2, 3, 4');
// Cria um array do tamanho da quantidade de parametros (se for mais de 1 parametro)
//arrayWithParam saida = ['1, 2, 3, 4']

const arry = Array.of('1, 2, "text", "texto 2"');
//cria um array adicionando os parametro como posição no array

//const divs = document.querySelectorAll('div');
//cria um nodelist com as divs existente na pagina, mas não se consegue usar os parâmetros 'pop, shift, etc'

//const divArray = Array.from(divs);
//converte este nodelist em um array, permitindo o usode parâmetros de array 'pop, shift, etc'

//push(elemento, ...) => adiciona 1 ou mais elementos no final de um array e retorn o tamanho do novo array

//pop(elemento)  => remove um elemento no final de um array e retorna o elemento removido

//unshift(elemento) => adiciona 1 ou mais elementos no início de um array e retorn o tamanho do novo array

//shift (elemento)   => remove um elemento no início de um array e retorna o elemento removido

//concat => funde arrays e retorna um novo array

/* Slice ( )
O método slice() copia uma parte de um array e o retorna como um novo array. Isso não modifica o array original.
array.slice(de, ate);
De: Corta o array a partir do índice informado;
Ate: Corta o array até o índice informado. */

const arrSlice = [0,1,2,3,4,5,6,7,8,9];
//console.log(arrSlice.slice(0));
//console.log(arrSlice.slice(0,4));

/* Splice ( )
O nome dessa função é bem parecido com slice( ). Essa similaridade de nomes algumas vezes confundem os desenvolvedores. O método splice() altera(muta) o array, seja adicionando ou removendo elementos dele. Vamos ver como fazer essas operações com esse método:
Removendo elementos
Para remover um elemento, precisamos do índice, e o número de elementos a serem removidos:
array.splice(índice, número de elementos);
O índice é o ponto de início para a remoção dos elementos. Elementos que têm um número de índice menor que o índice fornecido não serão removidos:
array.splice(2);  // Todos os elementos a partir do índice 2 serão removidos
Se não definirmos o segundo parâmetros, todos os elementos começando do índice informado serão removidos do array.

apenas o índice 0 e 1 permanecem
Como um segundo exemplo, se eu passar o primeiro parâmetro como 1, elementos que começarem no índice 2 serão removidos um por um, cada vez que a função splice() for executada:
array.splice(2, 1);

Array no começo
Depois de chamar pela primeira vez:

3 foi removido, portanto “hello world” está no índice 2
Depois de chamar pela segunda vez:

Dessa vez o “hello world” foi removido possuindo o índice: 2
Isso pode acontecer até não existir o índice 2.
Adicionando elementos
Para adicionar novos elementos precisamos inserir um 3º, 4º e 5º parâmetro (dependendo de quantos itens formos adicionar) ao método splice():
array.splice(índice, número de elementos, elemento, elemento);
Como exemplo, estou adicionando a e b no começo do array, e não removendo nada.
array.splice(0, 0, 'a', 'b'); */

const arr1 = Array (0,1,2,3,4,5,6,7,8,9);
const arr2 = Array (0,1,2,3,4,5,6,7,8,9);
const arr3 = Array (0,1,2,3,4);

arr3.splice(0, 0, 'item 1', 'item2');

console.log(arr1.splice(2));
console.log(arr2.splice(0,4));

console.log(arr3);