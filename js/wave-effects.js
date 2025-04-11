const inpName = document.querySelector(".form__name");
const inpMail = document.querySelector(".form__mail");
const nameErr = document.querySelector(".form__name-error");
const mailErr = document.querySelector(".form__mail-error");

inpName.addEventListener("input", () => {
  if (!inpName.checkValidity()) {
    inpName.classList.add("input-error");
    nameErr.classList.add("error-show");
  } else {
    inpName.classList.remove("input-error");
    nameErr.classList.remove("error-show");
  }
});

inpMail.addEventListener("input", () => {
  if (!inpMail.checkValidity()) {
    inpMail.classList.add("input-error");
    mailErr.classList.add("error-show");
  } else {
    inpMail.classList.remove("input-error");
    mailErr.classList.remove("error-show");
  }
});
