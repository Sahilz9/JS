//Axios is a library to make HTTP requests

// const { default: axios } = require("axios");

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }


//GENERATING RANDOM CAT FACTS


// let url = "https://catfact.ninja/fact";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFact();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });



// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         // console.log(res.data.fact);
//         return res.data.fact;
//     }
//     catch (err) {
//         console.log("Error ", err);
//         return "No fact found";
//     }
// }


//GENERATING RANDOM DOG PICS

let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getImg();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});


async function getImg() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    }
    catch (err) {
        console.log("Error", err);
        return "No img";
    }
}