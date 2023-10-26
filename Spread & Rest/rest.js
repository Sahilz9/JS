// Allows a function to take an indefinite number of arguments and
// bundle them in an array

function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us ", args[i]);
    }
}

function main(a, b, c, d) {
    console.log(arguments);
}
// Argument is a collection not a specific array but if we try to push the value
// into the argument then it'll give an error 

// ---------------- //
function min(...args) {
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        }
        else {
            return min;
        }
    })
}

function sumM(...args) {
    return args.reduce((sumM, el) => sumM + el);
}
// ---------------- //