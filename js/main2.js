// 1. Сделайте счетчик с помощью замыкания.
// Функция может принимать число в качестве аргумента.
// Если число передано в функцию – счет начинается с указанного числа.
// Если нет – то счет продолжается.


var counter = (function () {
	var count = 0;
	return function (num) {
		count = num !== undefined ? num : count;
		return count++;}
}());


console.log(counter())
console.log(counter())
console.log(counter(10))
console.log(counter())
console.log(counter())
console.log(counter(50))
console.log(counter())
console.log(counter())


// 2. Создайте несколько однотипных объектов и определите для них метод,
// используя ключевое слово this.

var greet = function(){
	return 'Hi, my name is ' + this.name
}

var person = {
	name: "John",
	surname: 'Johnson'
}

console.log(greet())


// 3. Добавьте к объекту новое свойство, используя геттер и сеттер.

Object.defineProperty(person, "fullGreet", {
  get: function() {
    return 'My full name is ' + this.name + ' ' + this.surname;
  }
});

console.log(person.fullGreet)

console.log(person)