let url = "https://catfact.ninja/fact";


// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json(); //This make Data readable 
//     })
//     .then((data) => {
//         console.log("Data 1: ", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("Data 2:", data2.fact);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



//Using async & await

async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}
