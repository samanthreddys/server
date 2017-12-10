var asyncAdd = (a,b) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                console.log("Inside if");
                resolve(a + b);

            }else {
                console.log("Inside else");
                reject("Arguments must be numbers");
            }

        },2000);

    })

}

asyncAdd(4, -1).then((res) => {
    console.log(res);
    return asyncAdd(res,5);

}, (errorMessage) => {
    console.log(errorMessage);

}).then((res) =>{
    console.log("Result should be 8: ", res)
}, (errorMessage) =>{
    console.log(errorMessage);

}).catch((errorMessage) =>{
    console.log(errorMessage);

})
;

/* var somePromise = new Promise((resolve,reject) => {
    
    setTimeout(() =>  {
        resolve('It Worked');
        //reject("Unable to fulfill promise");
    },2500);


});

somePromise.then((message) => {
    console.log("Success: ",message);

}, (errorMessage) => {
    console.log("Error:",errorMessage);

}); */