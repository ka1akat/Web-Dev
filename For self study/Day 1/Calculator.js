//object:
const user = {
    name: 'John',
    age: 18,
    LogThis: function (){
        console.log('My all objects', this);//получается өз өзін шақырады
        console.log('My name is', this.name);
        console.log('My age is', this.age);
    },
    address:{
        phone: "87074199313",
        home: "Sadovaia 10A",
        LogThis1(){
            console.log('this.home', this.home);
        },
    }

}
//user.LogThis();
//user.address.LogThis1();

//CALCULATOR
const calculator ={
    read(){
        this.a = Number(prompt("Enter a number",0));
        this.b = +(prompt("Enter a number",0));
    },
    sum(){
        return this.a + this.b;},
    mul(){
        return this.a * this.b;
    },
}
//calculator.read();
//console.log("Summ", calculator.sum());
//console.log("Multiplication", calculator.mul());

