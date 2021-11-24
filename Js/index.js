var age=20;
const dob = "01/06/2001";
let name = "Kelvin Ngumbao";

// alert(" Welcome " + name);
console.log("age:"+age);
console.log( "Date of Birth " + dob);

//DOM -Document Object Model

const navbarToggler = document.getElementById("navbar-toggler");

const collapse = document.querySelector(".navbar-collapse" );

console.log(navbarToggler);

navbarToggler.addEventListener("click",function() {
    toggle();
})

function toggle() {
    collapse.style.display = "flex";
    collapse.style.flexDirection ="column"

}