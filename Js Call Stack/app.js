// function hello() {
//     console.log("Inside the hello function");
// }

// function demo() {
//     console.log("Inside the demo function");
//     hello();
// }

// console.log("Starting from here");
// demo();


//Visualising Call Stack

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

 three();