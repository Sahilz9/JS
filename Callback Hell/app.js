h1 = document.querySelector("h1");

// function changeColor(color, delay, nextClr) {
//     setTimeout(() => {
//         h1.style.color = color;
//         nextClr();
//     }, delay);
// }

//Using Promises


function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })
}

changeColor("red", 1000)
    .then(() => {
        console.log("red color changed");
        return changeColor("green", 1000);
    })

    .then(() => {
        console.log("green color changed");
        return changeColor("yellow", 1000);
    })

    .then(() => {
        console.log("yellow color changed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue color changed");
    })

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("yellow", 1000, () => {
//             changeColor("blue", 1000);
//         })
//     })
// })


//The above is called callback nesting = callback hell


// function savedToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// savedToDb(
//     "Namaste Javascript", 
//     () => {
//         console.log("Success: Data saved");
//         savedToDb(
//             "Hello World", 
//             () => {
//                 console.log("Success: Data 2 saved");
//                 savedToDb(
//                     "Sam", () => {
//                     console.log("Success: Data 3 saved");
//                     }, 
//                     () => {
//                     console.log("Failure: weak connection");
//         });
//     });
// })