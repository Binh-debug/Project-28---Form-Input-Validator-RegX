const userNameInput = document.querySelector("#username");
const btnSubmit = document.querySelector("#btn-submit");
const passwordInput = document.querySelector("#password");

const formValid = /^(?=\D{8})(?=\D*\d{2})/;

userNameInput.addEventListener("input", validate);
passwordInput.addEventListener("input", validate);

function validate(e) {
  let length = e.target.value.length;
  let inputField = e.target.id;
  if (inputField === "username") {
    if (length > 3) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
    }
  }
  if (inputField === "password") {
    if (formValid.test(e.target.value)) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
    }
  }
}
