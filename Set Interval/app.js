// setInterval(() => {
//     console.log("Namaste react");
// }, 4000);



//Now how to stop setInterval to execute multiple times

let id = setInterval(() => {
    console.log("Namaste Javascript")
}, 2000);

console.log(id);

clearInterval(id);