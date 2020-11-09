'use script'

const name = '«Генератор защитного поля»'; // Write code on this line
let price = 1000; // Write code on this line
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

console.log(firstMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'
// `Выбран` + ` ` + name + `, цена за штуку` + ` ` + price + ` ` + `кредитов`;
const invoice = 100; 
const stock = 100;

const message = 50 <= stock ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!' ;
console.log(message);

if (invoice <= stock) {
    console.log(message);
} else {
    const message = 'На складе недостаточно товаров!';
    console.log(message)
}
if (50 <= stock) {
    console.log(message);
} else {
    const message = 'На складе недостаточно товаров!';
    console.log(message)
}
if (100 <= stock) {
    console.log(message);
} else {
    const message = 'На складе недостаточно товаров!';
    console.log(message)
}
if (150 <= stock) {
    console.log(message);
} else {
    const message = 'На складе недостаточно товаров!';
    console.log(message)
}