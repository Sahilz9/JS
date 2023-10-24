//Every method behave like a AND operator 

let num = [2, 4, 6, 8, 10];
let store = num.every((el) => {
    return el % 2 == 0;
});

//In the above code if all the elements should be divisible
//by 2 then it'll return true otherwise will return false


//Some method behave like a OR operator 

let nums = [0];

let stores = nums.some((el) => {
    return !(el % 2 == 0);
});


