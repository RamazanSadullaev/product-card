import { products } from "./products.js";

const productCardTemplate = document.querySelector("#product-card-template");
const productList = document.querySelector(".products");

function createProductCard(product) {
  const card = productCardTemplate.content.cloneNode(true);

  const image = card.querySelector("img");
  const category = card.querySelector(".card__category");
  const name = card.querySelector(".card__name");
  const description = card.querySelector(".card__description");
  const compound = card.querySelectorAll(".compound__list li");
  const price = card.querySelector(".card__price span");

  image.src = product.image;
  image.alt = product.name;

  category.textContent = product.category;
  name.textContent = product.name;
  description.textContent = product.description;
  price.textContent = product.price;

  compound.forEach((item, index) => {
    item.textContent = product.compound[index];
  });

  return card;
}

function getCardsCount() {
  while (true) {
    const count = Number(
      prompt("Сколько карточек отобразить? От 1 до 5")
    );

    if (Number.isInteger(count) && count >= 1 && count <= 5) {
      return count;
    }

    alert("Введите целое число от 1 до 5");
  }
}

function renderProducts(productsArray) {
  productList.innerHTML = "";

  productsArray.forEach((product) => {
    const card = createProductCard(product);
    productList.appendChild(card);
  });
}

const count = getCardsCount();

renderProducts(products.slice(0, count));

const productsDescriptions = products.reduce((acc, product) => {
  acc.push({
    [product.name]: product.description,
  });

  return acc;
}, []);

console.log(productsDescriptions);