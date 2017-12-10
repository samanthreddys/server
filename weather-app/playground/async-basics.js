console.log("First Statement");

setTimeout(() => {
    console.log("Inside First Log");
},3000);

setTimeout(() => {
    console.log("Inside Second Log");
},0);

setTimeout(() => {
    console.log("Inside Third Log");
},-1);

setTimeout(() => {
    console.log("Inside Fourth Log");
},2000);
console.log("Last Statement");