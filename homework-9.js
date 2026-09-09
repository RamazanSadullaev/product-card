//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.filter(number => number > 4);
console.log(newArray);

//2
const fruits = ["Яблоко", "Вишня", "Персик", "Арбуз", "Дыня"];

function checkFruit(fruit) {
    if (typeof fruit === "string") {
        return fruits.includes(fruit);
    }
    return "Некорректные входные параметры";
}

console.log(checkFruit("Арбуз"));
console.log(checkFruit(123));
console.log(checkFruit("Банан"));

//3
function reverseArray(array) {
    array.reverse();
}

reverseArray(fruits);
reverseArray(numbers);

console.log(numbers);
console.log(fruits);

//6
import { comments } from './comments.js';

//7
const dotCom = comments.filter(comment => comment.email.includes(".com"));

console.log(dotCom);

//8
const newComments = comments.map(comment => {
    if (comment.id <= 5) {
        comment.postId = 2;
    } else {
        comment.postId = 1;
    }

    return comment;
});

console.log(newComments);

//9
const idAndName = comments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});

console.log(idAndName);

//10
const length = comments.map(comment => {
    if (comment.body.length > 180) {
        comment.isInvalid = true;
    } else {
        comment.isInvalid = false;
    }

    return comment;
});

console.log(length);

//11
const mail = comments.map(comment => {
    return comment.email;
});

console.log(mail);

//reduce
const mailReduce = comments.reduce((result, comment) => {
    result.push(comment.email);

    return result;
}, []);

console.log(mailReduce);

//12
const mmail = comments.map(comment => {
    return comment.email;
});

const result1 = mmail.toString();
const result2 = mmail.join(", ");

console.log(result1);
console.log(result2);