// High order function refers that taking one or more function as an argument

function multipleGreet(func, count) {
    for (let i = 0; i <= count; i++) {
        func();
    }
}

let greet = function () {
    console.log("Hello");
}

multipleGreet(greet, 5);
