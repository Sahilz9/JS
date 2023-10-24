//Reduce

//Reduces the array to a single value
//syntax: arr.reduce(reducer function with 2 variablesfor(accumulator, element));

let arr = [1, 2, 3, 4];
let store = arr.reduce((res, el) => (res + el));

//Explanation working of the Reduce

//(0, 1) = 1
//(1, 2) = 3
//(3, 3) = 6
//(6, 4) = 10