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
let invoice = 100; 
const stock = 100;

// Write code under this line
const message = "Заказ оформлен, с вами свяжется менеджер";
if (invoice <= stock) {
    console.log(message);
} else {
    console.log('На складе недостаточно товаров!' )
}
invoice = 50;
if (invoice <= stock) {
    console.log(message);
} else {
    console.log('На складе недостаточно товаров!' )
}
invoice = 150;
if (invoice <= stock) {
    console.log(message);
} else {
    console.log('На складе недостаточно товаров!' )
}
