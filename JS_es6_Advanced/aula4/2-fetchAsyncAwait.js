//Fetch, Async/Await e EventEmitter

/* fetch('/data.json').then(responseStream => {
    console.log(responseStream);
}) */

const asyncTimer =() => new Promise((res, rej) =>{
    setTimeout(() => {
        res(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
};

simpleFunc()
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});
