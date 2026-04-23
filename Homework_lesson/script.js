let title
let screens
let screenPrice
let rollback
let fullPrice
let adaptive

title = "JavaScriptExpress";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 12500;
rollback = 25;
fullPrice = 35000;
adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log('*******')
console.log(`Длина строки: ${screens.length}`);
console.log('*******')
console.log('Cтоимость верстки экранов ', screenPrice, ' рублей');
console.log('Cтоимость разработки сайта ' + fullPrice + ' рублей');
console.log('*******')
console.log(screens.toLowerCase().split(', '))
console.log('*******')
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)) + '')
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`)