function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather("Махачкале",32);


const speedLight = 299792458

function checkSpeed(speed) {
  if (speed > speedLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedLight) {
    console.log("Субсветовая скорость");
  } else if (speed === speedLight) {
    console.log("Скорость света");
  }
}

checkSpeed(299792458);


const product = "Книга"
const price = 450

function buyProduct(budget) {
  if (budget > price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(1000);


const name = "Рамазан";
const surname = "Садуллаев";
const age = 24;

function student() {
  console.log(`Имя: ${name}, фамилия: ${surname}, возраст: ${age},`);
}

student()