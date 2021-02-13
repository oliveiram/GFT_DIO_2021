//Callbakcs e Promises

//Promises
const doSomethingPromise = () => new Promise((resolve, reject) =>{
   // throw new Error('Simulando erro'); ////
    setTimeout(function(){
        resolve('First data');
    }, 1000);
} );

const doOtherThingPromise = () => new Promise((resolve, reject) =>{
    throw new Error('Simulando erro'); ////
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

//doSomethingPromise.then(data =>console.log(data));
/* doSomethingPromise
.then(data =>console.log(data))
.catch(error => console.log(error)); //simulando erro */
doSomethingPromise()
.then(data => {console.log(data); return doOtherThingPromise()})
.then(data2 => console.log(data2))
.catch(error => console.log('Ops', error));



//Callbacks
/* function doSomething(callback){
    setTimeout(function(){
        callback('Firt data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second data');
    }, 1000);
}

function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');

            try{
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');

                    try{
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        }, 1000);

                    }catch(err){
                        //handle error
                    }
                });
            }catch(err){
                //handle error
            }
        });
    }catch(err){
        //handle error
    }
}

doAll(); */