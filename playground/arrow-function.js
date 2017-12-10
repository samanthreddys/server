var user = {
    name:"Samanth",
    sayHello: () => {
        console.log(`Hi! I'm ${this.name}`);
        //console.log(arguments);
    },
    sayHelloAlt (){
        console.log(`Hi! ${this.name}`);
       // console.log(arguments);
    }
};
user.sayHello();
user.sayHelloAlt(1,2,3,3,4,4,5);
