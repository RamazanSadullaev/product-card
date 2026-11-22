export default class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.overlay = document.querySelector(".overlay");
        this.closeButton = this.modal.querySelector(".modal__close");

        this.listenCloseButton();
    }

open() {
    this.modal.classList.add("modal-showed");
    this.modal.classList.add("overlay-showed");
}

close() {
    this.modal.classList.remove("modal-showed")
    this.overlay.classList.remove("overlay-showed")
}

isOpen() {
    return this.modal.classList.contains("modal-showed");
}

listenCloseButton() {
    this.closeButton.addEventListener("click", () => {
        this.close();
    });
  }
}