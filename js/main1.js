// 1. Выведите в консоль любую строку. Если выводимая строка пустая –
// отобразите строку текста по умолчанию.

console.log('Lorem ipsum dolor sit amet, consectetur.')

// 2. Создайте любой объект, например, "браузер" и выведите в консоль все
// его поля.

var browser = {
	first: 'Chrome',
	second: 'Firefox',
	third: 'Opera',
	fourse: 'Safari',
}

console.log(browser);

// 3. Дополнительно к п.2: создайте метод для объекта.

browser.using = function () {
	return browser.first
}

console.log(browser.using())

// 4. Сделайте цикл for от 1 до 20 и выведите в консоль только четные
// значения.

var x;
for (x=1; x<20; x++) {
	if (x % 2 == 0) {
	console.log(x)
	}
}
console.log(x)

// 5. Создайте любой код, используя конструкцию 
//switch / case / default.

var name = 'Jana',
	Status;
	switch(name) {
		case 'John': Status = 'father'; break;
		case 'Jana': Status = 'mather'; break;
		case 'Foma': Status = 'son'; break;
		case 'Aimee': Status = 'daughter'; break;
	}

console.log(name + ' ' + Status);

// 6. Создайте условие, используя тернарный оператор ?.

var hour = 14;
var text = hour < 9 ? 'офис еще не открылся' : hour > 18 ? 'офис уже закрыт' : 'добро пожаловать';
console.log(text) 

// 7. Выводите значение переменной, пока не достигнуто значение 7
// (используйте цикл while).

var y = 0;
do {
console.log(y++);
} while (y < 7);

// 8. Создайте основную функцию, которая принимает три параметра:
// - первые два параметра – числа 2 (число, арг1) и 4 (степень, арг2)
// - третий параметр – callback, возвратная функция
// В основной функции выведите сообщение: "Число арг1 в степени арг2".
// Затем выполните возведение числа в степень, результат присвойте
// переменной.
// Передайте переменную в возвратную функцию (арг3), где сгенерируйте
// сообщение: "Результат арг3".


// function myFunc(arg1, arg2, callback) {
// 	console.log('Число ' + arg1 + ' в степени ' + arg2);
// 	callback();
// }

// var arg3 = function() {Math.pow(myFunc.arg1, myFunc.arg2)}
// console.log(arg3())

// myFunc(2, 4, function(){
// 	console.log('Результат ' + arg3());
// });

var arg1 = 2,
	arg2 = 4,
	myFunc = function(arg1, arg2, callback) {
	console.log('Число ' + arg1 + ' в степени ' + arg2);
	callback();
}
 function argPow() {
 	var arg3 = argPow;
 	Math.pow(arg1, arg2)
 	return argPow};


myFunc(2, 4, arg3);
console.log('Результат ' + arg3);