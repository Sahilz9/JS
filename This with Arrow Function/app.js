//Arrow Function                Normaly Function
//- Lexical Scope               - Scope->this->calling object
//- Jo parent ja scope h 
//  whi arror function 
// inherit krlete h

// Arrow functoin doesn't make "This" to the 
//  Calling object arrow function make calling object
// "This" to "This"

const student = {
    name: "Sam",
    marks: 99,
    prop: this, //Global scope
    getName: function () {
        console.log(this);
        return this.name;
    },

    getMarke: () => {
        console.log(this); //Parent's Scope -> window
        return this.marks;
    },
    getinfo1: function () {
        setTimeout(() => {
            console.log(this) //student
        }, 2000);
    },
    getinfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        }, 2000);
    },
};

let fun = function () {
    setTimeout(() => {
        console.log("Hello World");
    }, 2000);
}
fun()