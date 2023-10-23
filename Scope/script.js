function outerFun() {
    let a = 5;
    let b = 10;
    function innerFun() {
        console.log(a);
    }
    innerFun();
}

outerFun();

//Here I have 

//global scope

let global = 10;

function outerFunc() {
    let a = 19;
    let b = 10;
    function innerFunc() {
        let b = 23;
        console.log(a);
    }
    innerFunc();
}

outerFunc();

let gloBal = 10;

function outerFunc() {
    let a = 19;
    let b = 10;
    function innerFunc() {
        let c = 23;
        console.log(a);
    }
    console.log(c);
    innerFunc();
}

outerFunc();

console.log(gloBal);

//Error: because i'm accessing the c variable 
//and c variable can't be accessible outside the function
