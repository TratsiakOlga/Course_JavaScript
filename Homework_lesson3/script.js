'use strict';

let title = "JavaScriptExpress";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 12500;
let rollback = 25;
let fullPrice = 35000;
let adaptive = true;

title = prompt("Как называется ваш проект?");
console.log(`Наш проект называется: ${title}`);
console.log('*******');

screen = prompt("Какие типы экранов нужно разработать?");
console.log(`Разработать нужно: ${screen} тип экранов`);
console.log('*******');

screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(`Данная работа будет стоить: ${screenPrice} рублей`);
console.log('*******');

adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(`Адаптив нужен? Ответ: ${adaptive}.`);
console.log('*******');

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log('Нужен тип услуги:', service1);
let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log('Будет стоить:', servicePrice1, 'рублей');
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log('Нужен тип услуги:', service2);
let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log('Будет стоить:', servicePrice2, 'рублей');
console.log('*******');

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(`Итоговая стоимость работы: ${fullPrice}`);
console.log('*******');

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

/* Результат работы ДЗ2:
console.log(`Длина строки: ${screens.length}`);
console.log('*******')
console.log('Cтоимость верстки экранов ', screenPrice, ' рублей');
console.log('Cтоимость разработки сайта ' + fullPrice + ' рублей');
console.log('*******')
console.log(screens.toLowerCase().split(', '))
console.log('*******')
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`)*/