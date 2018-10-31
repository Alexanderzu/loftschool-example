/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива,
 который будет передан в параметре array
 */

var array = [10,20,30,40];

var fn = function () {
};

function forEach(array, fn) {

  for (var i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }

}
forEach(array, fn);

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива,
 который будет передан в параметре array
 */
var array = [10,20,30,40];

var fn = function () {
};

function map(array, fn) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    results.push(fn(array[i], i, array));
  }
  return results;
}
map(array, fn);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива,
 который будет передан в параметре array
 */

var array = [10,20,30,40];

var initial = 0;
var fn = function () {
};

function reduce(array, fn, initial) {
  var result = initial || array[0],
      i = initial ? 0 : 1;
  for (; i < array.length; i++) {
    result = fn.call(null, result, array[i], i, array);
  }
  return result;
}
reduce(array, fn, initial);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, 
 преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

var obj = {
  name: 'Сергей',
  lastName: 'Петров'
};
function upperProps(obj) {
  var objArr = Object.keys(obj);
  console.log(objArr);

  var objArrUp = objArr.map(function(elem) {
    return elem.toUpperCase();
  });
  console.log(objArrUp);
  return objArrUp;
}

upperProps(obj);

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива,
 который будет передан в параметре array
 Метод slice() извлекает часть строки и возвращает новую строку.
 */
// var array = ["Почему", "надо", "учить", "JavaScript"]; // надо, учить
var array = [1,2,3,4,5];

function slice(array, from = 0, to = array.length) {
  var results = [];
  if (to > array.length)  {
    to = array.length
  }

  if (from > array.length)  {
    from = array.length
  }

  if (from < 0)  {
    from = from + array.length;
  }

  if (from < 0)  {
    from = 0
  }

  if (to < 0)  {
    to = to + array.length;
  }

  if (to < 0)  {
    to = 0
  }

  for (from; from < to; from++) {
    results.push(array[from]);
    console.log(results[from]);
  }
  return results;
}
slice(array, 0, 3); // 1,2,3
slice(array, -1, 3); // []
slice(array, -1, -2); // []
slice(array, 1); // 2,3,4,5
slice(array, -1); // 5
slice(array, 0, 0); // []
slice(array, 1, 3000); // []

console.log("-----");

console.log(array.slice(0,3));
console.log(array.slice(-1,3));
console.log(array.slice(-1,-2));
console.log(array.slice(1));
console.log(array.slice(-1));
console.log(array.slice(0, 0));
console.log(array.slice(1, 3000));


/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств
 и возводить это значение в квадрат
 */

var obj = {
  a: 2,
  b: 5
};
function createProxy(obj) {
  let proxy = new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value * value;
      return true;
    }
  });
  return proxy;
}
createProxy(obj);

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
