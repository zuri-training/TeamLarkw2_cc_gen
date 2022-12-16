const showPassword1 = document.querySelector("#show-password_1");
const passwordField1 = document.querySelector("#password_1");

showPassword1.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  this.classList.toggle("fa-eye");

  const type1 =
    passwordField1.getAttribute("type") === "password" ? "text" : "password";
  passwordField1.setAttribute("type", type1);
});

const showPassword2 = document.querySelector("#show-password_2");
const passwordField2 = document.querySelector("#password_2");

showPassword2.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  this.classList.toggle("fa-eye");

  const type2 =
    passwordField2.getAttribute("type") === "password" ? "text" : "password";
  passwordField2.setAttribute("type", type2);
});

