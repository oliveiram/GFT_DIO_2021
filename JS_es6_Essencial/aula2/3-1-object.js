
let user ={
    name: 'Marcio'
}
console.log(user);

//Alterando as propriedades de um object
user.name = 'Outro nome 1';
console.log(user);

user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

//criando uma propriedade
user.lastName = 'Oliveira';
console.log(user);

//deletando uma propriedade 
delete user.name;
console.log(user);
