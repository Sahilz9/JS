const spr = {
    email: "john@gmail.com",
    password: "sdbfhbsdhkfb"
};

const dataCopy = { ...spr, id: 264 };

// Can also spread array and convert into an object

let arr = [1, 2, 3, 4];
let obj1 = { ...arr };


const vari = [..."Namaste"];