
// 1. Создать html-файл и подключить к нему js-файл.
// 2. Инициализировать текстовую, числовую, логическую переменные,
// массив, объект... вывести их в консоль.

var myName = 'Sergei';
	myAge = 29;
	myMessage ='Hello';
	yearNow = 2018;
	yearOfBirth = yearNow - myAge;
	myBool = 'false';
	array = [10, 11, 12];

console.log(myName);
console.log(myAge);
console.log(myMessage);
console.log(yearOfBirth);
console.log(myBool);
console.log(array);

// 3. Преобразовать целое число в вещественное с 2 знаками после запятой.

var Number = 10;

console.log(Number.toFixed(2));

// 4. Создать переменную i для которой выполнить префиксный и
// постфиксный инкременты, результат вывести в консоль.

var i = 10;

console.log(++i);
console.log(i++);
console.log(i);

// 5. Выполнить присваивание с операцией, используя операторы:
// +=, –=, *=, /=, %=, результат вывести в консоль.

var num = 10;

console.log(num+5);
console.log(num-5);
console.log(num*5);
console.log(num/5);
console.log(num%4);

// 6. Используя свойства и методы объекта Math, вывести в консоль:
// ○ константу Pi
// ○ округленное значение числа 89.279
// ○ случайное число между 0 и 10
// ○ 2 в 5 степени

console.log(Math.PI);
console.log(Math.round(89.279));
console.log(Math.random ()*10);
console.log(Math.pow(2,5));

// 7. Вывести в консоль длину строки.

var string = 'Lorem ipsum dolor sit amet.';
console.log(string.length);

// 8. Проверить наличие подстроки в строке, результат вывести в консоль.

console.log(string.indexOf('dol'));


// 9. Выполнить переименование подстроки в строке, результат – в консоль.

console.log(string.replace('dolor','grn'));

// 10. Преобразовать строку в верхний и нижний регистры, результат – в
// консоль.

console.log(string.toUpperCase());

