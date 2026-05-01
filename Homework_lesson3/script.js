'use strict';

let title = prompt("Как называется ваш проект?");
let screen = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 25;
fullPrice = screenPrice + servicePrice1 + servicePrice2;

let percentPrice = Math.ceil(fullPrice * (rollback / 100));
let servicePercentPrice = fullPrice - percentPrice;
console.log(`Стоимость за вычетом отката посреднику: ${servicePercentPrice}`);
console.log('*******');

switch (true) {
    case fullPrice > 30000:
        console.log("Даем скидку в 10%")
        break
    case fullPrice > 15000 && fullPrice < 30000:
        console.log("Даем скидку в 5%")
        break
    case fullPrice < 15000 && fullPrice > 0:
        console.log("Cкидка не предусмотрена")
        break
    default:
        console.log("Что-то пошло не так")
}

console.log(`Наш проект называется: ${title}`);
console.log(`Разработать нужно: ${screen} тип экранов`);
console.log(`Данная работа будет стоить: ${screenPrice} рублей`);
console.log(`Адаптив нужен? Ответ: ${adaptive}.`);
console.log('Нужен тип услуги:', service1);
console.log('Будет стоить:', servicePrice1, 'рублей');
console.log('Нужен тип услуги:', service2);
console.log('Будет стоить:', servicePrice2, 'рублей');
console.log(`Итоговая стоимость работы: ${fullPrice}`);