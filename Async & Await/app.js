//async

// async function greet() {
//     throw "404 page not found";
//     return "namaste javascript";
// }

// greet()
//     .then(() => {
//         console.log("W elcome");
//     })
//     .catch((err) => {
//         console.log("Page fault", err);
//     });


// let demo = async () => {
//     return 5;
// }


//await -> pauses the execution of its surrounding async function until the promise
//is settled (resolved or rejected)

//await keyword can be use only inside the async function

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     greet();
// }

// h2 = document.querySelector("h2");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h2.style.color = color;
//             console.log(`Color changed to ${color}`);
//             resolve("color changed");
//         }, delay);
//     });
// }
//Modifying the below code using async & await

// async function demo() {
//     changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
// }

// changeColor("red", 1000)
//     .then(() => {
//         console.log("red changed");
//         return changeColor("blue", 1000);
//     })

//     .then(() => {
//         console.log("blue changed");
//         return changeColor("green", 1000);
//     })
//     .catch((error) => {
//         console.log("found error");
//     })


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Namaster Javascript");
    }, 10000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Namaste Javascript2");
    }, 5000);
})


async function helloWorld() {
    console.log("Hello Aliens!");


    const val = await p1;
    console.log("Namaste React");
    console.log(val);


    const val2 = await p2;
    console.log("Namaster Next Js");
    console.log(val2);
}

helloWorld();