// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextClr) {
//     setTimeout(() => {
//         h1.style.color = color;
//         nextClr();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("yellow", 1000, () => {
//             changeColor("blue", 1000);
//         })
//     })
// })


//The above is called callback nesting = callback hell


function savedToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
}

savedToDb(
    "Namaste Javascript", 
    () => {
        console.log("Success: Data saved");
        savedToDb(
            "Hello World", 
            () => {
                console.log("Success: Data 2 saved");
                savedToDb(
                    "Sam", () => {
                    console.log("Success: Data 3 saved");
                    }, 
                    () => {
                    console.log("Failure: weak connection");
        });
    });
})