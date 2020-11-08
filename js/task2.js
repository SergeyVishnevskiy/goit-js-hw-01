'use script'
const invoice1 = 100; 
const invoice2 = 50; 
const invoice3 = 150; 
const stock = 100;

// Write code under this line
const message = 'Заказ оформлен, с вами свяжется менеджер';

if (invoice1 <= stock) {
    console.log(message);
} else {
    console.log('На складе недостаточно товаров!' )
}
 
if (invoice2 <= stock) {
    console.log(message);
} else {
    console.log('На складе недостаточно товаров!' )
}

if (invoice3 <= stock) {
    console.log(message);
} else {
    console.log('На складе недостаточно товаров!' )
}
//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'  

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!' 
let invoice = 100; 
// const stock = 100;

// Write code under this line
// const message = "Заказ оформлен, с вами свяжется менеджер";
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
// let invoice = 100; 
// const stock = 100;

// // Write code under this line
// const message = "Заказ оформлен, с вами свяжется менеджер";
// if (invoice >= stock) {
//     console.log(message);
// } else {
//     console.log('На складе недостаточно товаров!' )
// }