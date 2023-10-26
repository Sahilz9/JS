const student = {
    name: "sam",
    age: 16,
    class: 10,
    subject: ["english, science, math, business"],
    username: "sam@123",
    password: "dfhbsd"
}
// let username = student.username;
// let password = student.password;

//Instead of initializing this we can do the below

// let { username, password } = student; 

//Changing the object variables name
let { username: user, password: pswrd, city = "london" } = student;