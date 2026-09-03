//3:Объект на основе моих данных
const myData = {
    name: "Рамазан",
    surname: "Садуллаев",
    age: 24,
    mail: "fifavon@mail.ru",
    city: "Махачкала",
    university: "ДГУ",
    direction: "Экономика",
    hobby: "BJJ",
};

//4:Объект с данными об автомобиле
const myCar = {
    brand: "BMW",
    model: "X5",
    year: 2021,
    color: "blue",
    gearbox: "machine",
};

myCar.owner = myData

console.log(myCar);

//5:Добавление свойства ""максимальная скорость" к объекту авто
function checkSpeed(car) {
    if (!("maxSpeed" in car)) {
        car["maxSpeed"] = 250;
    }
    console.log(myCar)
}

//6:Объект - свойство объекта
const user = {
    name: "Джон Сноу",
    age: 32
};

getValue(user, "name");

function getValue(object, key) {
    console.log(object[key]);
}

//7:Массив с названием продукта
const frutis = ['Банан', 'Яблоко', 'Киви'];

//8:Массив с книгами
const book = [
    {
        name: "Мертвые душ",
        author: "Николай Гоголь",
        year: 1842,
        color: "Белый",
        genre: "Поэма"
    },
    {
        name: "Место назначение неизвестно",
        author: "Агата Кристи",
        year: 1954,
        color: "Синий",
        genre: "Детективный роман"
    },
    {
        name: "Девы",
        author: "Алекс Миахаэлидес",
        year: 2021,
        color: "Черный",
        genre: "Триллер"
    }
]

book.push({
    name: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    color: "чёрный",
    genre: "роман",
})

//9:Массив с книгами Гарри Поттер
const bookHarryPotter = [
    {
        name: "Философский камень",
        author: "Дж. К. Роулинг",
        year: 1997,
        color: "красный",
        genre: "фэнтези"
    },
    {
        name: "Тайная комната",
        author: "Дж. К. Роулинг",
        year: 1998,
        color: "зелёный",
        genre: "фэнтези"
    },
    {
        name: "Узник Азкабана",
        author: "Дж. К. Роулинг",
        year: 1999,
        color: "синий",
        genre: "фэнтези"
    }
]

const allBooks = [...book, ...bookHarryPotter];

//10:Добавление свойства isRare
function addingNewObjectProperty(allBooks) {
    return allBooks.map(book => {
        book.isRare = book.year > 2000;
        return book;
    });
}

console.log(addingNewObjectProperty(allBooks));