let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // let user = document.querySelector("#user");
    // let password = document.querySelector("#password");

    //We can access the value of the form 
    let user = this.elements[0];
    let password = this.elements[1];

    console.log(user.value);
    console.log(password.value);

    alert(`Hi ${user.value}, your password is set to ${password.value}`);
});