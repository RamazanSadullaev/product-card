// Покраска первой карточки
const productCard = document.querySelector('.card')
const cardColorButton = document.querySelector('#card-color-button')
const redColorHash = '#ff1111'
const blueCorolHash = '#000fff'

cardColorButton.addEventListener('click', () => {
    productCard.style.backgroundColor = redColorHash;
})

// Покраска всех карточек

const productCards = document.querySelectorAll('.card')
const cardsColorButton = document.querySelector('#cards-color-button')

cardsColorButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = blueCorolHash)
})

// Открыть страницу google

const googlePageButton = document.querySelector('#google-page-button')
const url = "https://www.google.com/";

googlePageButton.addEventListener('click', () => {
    const answer = confirm('Вы точно хотите открыть Google?');

    if (answer) {
        window.location.href = url;
    }
})

// Вывод консоль лог и ALERT

const consoleButton = document.querySelector('#console-log-button')

consoleButton.addEventListener('click', () => consoleLogButton('ДЗ №6'))

function consoleLogButton(message) {
    alert ('ДЗ №6')
    console.log(message)
}

// Вывод заголовка в консоль

const title = document.getElementsByTagName('h1')[0]

title.addEventListener('mouseover', function () {
    console.log(title.textContent)
})

// Покраска кнопки

const colorButton = document.querySelector('#color-button')

colorButton.addEventListener('click', () => {
    colorButton.classList.toggle('button__orange')
})