//Promises:- it's an object represent the eventual completion (or failure) of an
//Asynchronous operation and its resulting value

//Resolve + Reject


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
//                         console.log("Success: Data 3 saved");
//                     },
//                     () => {
//                         console.log("Failure: weak connection");
//                     });
//             });
//     })

function savedToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success");
        }
        else {
            reject("Failure");
        }
    });
}


// savedToDb("Namaster Javascript");

//Promises method
//then() & catch()


savedToDb("Namaste Javascript")
    .then((result) => {
        console.log("Data Saved 1: Accepted");
        //Promises chaining
        return savedToDb("Namaste Javascript 2");
        console.log("Promises result: ", result);
    })
    .then((result) => {
        console.log("Data Saved 2: Accepted");
        return savedToDb("Namaste Javascript 2");
        console.log("Promises result: ", result);
    })
    .then((result) => {
        console.log("Data Saved 3: Accepted");
        console.log("Promises result: ", result);
    })
    .catch((error) => {
        console.log("Rejected");
        console.log("Promises error: ", error);
    });



//This Promises Chaining will be helpful in calling an API  
