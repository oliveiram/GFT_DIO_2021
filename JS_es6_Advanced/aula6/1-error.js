class CustomError extends Error{
    constructor({ message, data}){
        super(message);
        this.data = data;
    }
}

try{
    const name = 'Márcio';

    const myError = new CustomError({
        message: 'Custom Message!',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
}catch(err){
    console.log('Error: ', err);
    console.log(err.data);
}finally{
    console.log('keep going...');
}