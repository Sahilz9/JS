//Map method will create a new array and store the output values

// let num = [1, 2, 3, 4, 5];
// let double = num.map((el) => {
//     return el * el;
// });


//Filter returns new array 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let store = nums.filter((el) => {
    return el % 2 == 0;
});

//In the above code filter will only store the even numbers and rest of the as in odd
//not gonna store it I