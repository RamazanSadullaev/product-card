const form = document.querySelector("#subscribe-form");
const emailInput = document.querySelector("#email");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value;

    console.log({
      email: email
    });
});

const registrationButton = document.querySelector("#registration");
const modal = document.querySelector("#registration-modal");
const overlay = document.querySelector(".overlay")
const closeButton = document.querySelector(".modal__close")

registrationButton.addEventListener("click", () => {
    console.log("Кнопка регистрации нажата!");

    modal.classList.add("modal-showed");
    overlay.classList.add("overlay-showed");
})

closeButton.addEventListener("click", () => {
    modal.classList.remove("modal-showed");
    overlay.classList.remove("overlay-showed");
});

const registrationForm =  document.querySelector(".modal form");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

let user;

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!registrationForm.checkValidity()) {
        alert("Регистрация отклонена! Заполните все поля.");
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Регистрация отклонена! Пароли не совпадают.");
        return;
    }

    user = {
        firstNaame: document.querySelector("#first-name").value,
        lastName: document.querySelector("#last-name").value,
        birthDate: document.querySelector("#birth-date").value,
        login: document.querySelector("#login").value,
        password: passwordInput.value,
        confirmPassword: confirmPasswordInput.value,
        createdOn: new Date()
    };

    console.log(user);

    modal.classList.remove("modal-showed");
    overlay.classList.remove("overlay-showed");
});