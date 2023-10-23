//High order function returns

function oddEvenTest(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log("Wrong Call");
    }
}

let request = "odd";


//2nd way to write the above code
//Here i've directly return the function instead of storing the function in a variable


function oddEvenTest(requests) {
    if (requests == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if (requests == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log("Wrong Call");
    }
}

let requests = "odd";