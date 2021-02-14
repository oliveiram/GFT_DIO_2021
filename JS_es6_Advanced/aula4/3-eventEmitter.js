//Event Emitter

const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User Logged', data);
    }
}
const users = new Users();
users.on('User Logged', data => {
    console.log(data);
});

users.userLogged({user: 'Marcio de Jesus'});

/* const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged' , {user: 'Márcio de Jesus'}); */