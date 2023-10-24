// 1st way

let arr = [1, 2, 4, 5, 6];

let print = function (el) {
    console.log(el);
};

arr.forEach(print);


// 2nd way

let brr = [1, 2, 4, 7, 9];


arr.forEach(function (el) {
    console.log(el);
});


// Through Arrow Function (Using to make it more concise)

let crr = [1, 2, 4, 7, 9];


arr.forEach((el) => {
    console.log(el);
});
