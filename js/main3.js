// 1. Используя метод filter отфильтровать строки, содержащие букву "o".
// ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum',
// 'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo,
// eos', 'Vero, quos']

var lorem = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum', 'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo, eos', 'Vero, quos'];

var loremFilter = lorem.filter(function(letter) {
  return loremFilter.slice(0,'o');
})

 console.log(loremFilter);

// 2. Отобразите текущую дату и время в следующих форматах:
// a. yyyy-mm-dd, hh:mm (можно без учета часового пояса)
// b. dd.mm.yyyy, hh:mm:ss (локальное время и формат)

