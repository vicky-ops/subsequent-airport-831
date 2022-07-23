import navBar_payment from "./navBar.js";

// console.log(navBar_payment);
document.querySelector("#navigation").innerHTML = navBar_payment();

let data = JSON.parse(localStorage.getItem("users")) || [];
