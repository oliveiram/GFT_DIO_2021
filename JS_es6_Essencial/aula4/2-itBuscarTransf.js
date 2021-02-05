//Iterar, Buscar e Transformar elementos

//Iterar
const arr = [1,2,3,4,5];
/* arr.forEach((value, index) =>{
    console.log(`${index}: ${value}`)
}) */;

//map - Retorna um novo array deste array

//const newArr = arr.map(value => value*2);
//console.log(newArr);
//console.log(arr.map(value => value*2));


//flat => retorna um novo array com com todos os elementeos de um sub-array concatenados de forma recursiva de acordo com o especificado (depth)
const arrayFlat = [1,2,[3,4]];

//console.log(arrayFlat.flat());
const idades = [20,30,[35,60, [70,40]]];
// console.log(idades.flat(2));

//flatMap

// console.log( arr.flatMap(value => [value*2])); 
// console.log( arr.flatMap(value => [[value*2]])); 

//keys => retorna um array iterator que contem as chaves para cada elemento do array
const arrKeys = arr.keys();
//console.log(arrKeys);

/* arrKeys.next();
console.log(arrKeys);

arrKeys.next();
console.log(arrKeys); */

//values //keys => retorna um array iterator que contem os valores de cada elemento do array
const arrValues = arr.values();

//console.log('values: ', arrValues);

//entries retorna um Array Iterator que contem os pares chave/valospara cada elemento do array
const arrEntries = arr.entries();
//console.log(arrEntries);

//find

// const firstGreatherThanTwo = arr.find(value =>value > 2);
// console.log(firstGreatherThanTwo);
// const firstindexGreatherThanTwo = arr.findIndex(value =>value > 2);
// console.log(firstindexGreatherThanTwo);

//filter
// console.log(arr.filter((value =>value > 2)));

//indexof
// console.log(arr.lastIndexOf(2));

//includes
// console.log(arr.includes(1));

//some
// console.log(arr.some(value => value %2 === 0));

//every verifica se todos os itens do array satisfazem determinada condição
// console.log(arr.every(value => value === Number));

//sort ordena um array
// const sortArr = [2,4,8,7,2,6,9,5];

// console.log(sortArr.sort());

//reverse inverte a ordem do array
//console.log(sortArr.reverse());

//join
// const joinArr = [1,2,3,4,5,6,7,8];
// console.log(joinArr.join('_'));

//reduce
const reducearr = [1,2,3,4,5];
console.log(reducearr.reduce((total, value) => total+=value,0));
