//Symbols -> forma de gerar identificadores unicos
//Iterators
/* const uniqueId = Symbol('hello');
const uniqueId2 = Symbol('hello');

const obj = {
    [uniqueId]: 'Hello'
};
console.log(uniqueId); */
//Symbol.iterator   Symbol.dplit     Symbol.toStringTag

const arr = [1, 2, 3, 4];

/* const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); 

for(let value of arr){
    console.log(value);
}
*/
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
      let i = 0;
      return{
          next:() =>{
              i++;
              return{
                  value: this.values[i-1],
                  done: i > this.values.length
              };
          }
        };
    }
};
const it = obj[Symbol.iterator]();
console.log(it.next());
for(let value of obj){
    console.log(value);
}

const arr2 = [...obj];
console.log(arr2);