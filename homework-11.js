import Modal from "./Modal.js"
import Form from "./Form.js"

const subscribeForm = new Form("subscribe-form");

subscribeForm.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(!subscribeForm.isValid()) {
        subscribeForm.form.reportValidity();
        return;
    }

    const values = subscribeForm.getValues();

    console.log (values);

    subscribeForm.reset();
})

const registrationButton = document.querySelector("#registration");
const registrationModal = new Modal("registration-modal");

registrationButton.addEventListener("click", () => {
    registrationModal.open();
    
});

const registrationForm =  new Form("registration-form");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

let user;

registrationForm.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!registrationForm.isValid()) {
        alert("Регистрация отклонена! Заполните все поля.");
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Регистрация отклонена! Пароли не совпадают.");
        return;
    }

    const values = registrationForm.getValues();

    user = {
        ...values,
        createdOn: new Date()
    };

    console.log(user);

    registrationForm.reset();

registrationModal.close();
});