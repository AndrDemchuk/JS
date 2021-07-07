//Random Task 1
/* let arr1 = [74, 18, 10, 5, 84, 24, 105];
arr1.sort(function (a, b) {
  console.log(a, b);
  return a > b;
});
console.log(arr1); */

//Random Task 2
/* var array = [124, "kovbasa", "sosiska", 10];
array.sort(function (a, b) {
  console.log(a, b);
  if (+a && +b) {
    return a - b;
  } else if (+b) {
    return -1;
  }
});
console.log(array); */

//Random Task 2.1
/* let obj1 = {
  className: "open menu",
};
function addClass(obj, cls) {
  for (let key in obj) {
    if (obj[key].indexOf(cls) < 0) {
      return (obj[key] += " " + cls);
    }
  }
}
console.log(addClass(obj1, "last"));
console.log(addClass(obj1, "one"));
console.log(obj1.className); */

//Random Task 2.3
/* let obj1 = {
  className: "open menu",
};

function addClass(obj, cls) {
  let arr = obj.className.split(" ");
  if (arr.indexOf(cls) === -1) {
    arr.push(cls);
    obj.className = arr.join(" ");
  }
  return obj.className;
}

addClass(obj1, "text1");
addClass(obj1, "text2");
console.log(obj1.className); */

//Random Task 3
/* str1 = "list-style-image"; //myShortSring

function toCamelCase(str) {
  let camel = str.split("-");
  for (let i = 1; i < camel.length; i++) {
    camel[i] = camel[i].charAt(0).toUpperCase() + camel[i].substr(1); //slice(1) теж можна
  }
  return camel.join("");
}

console.log(toCamelCase(str1));
*/

//Random Task 4
/* let arr1 = [5, 2, 1, -10, 8];
function reverseSort(arr) {
  return arr.sort(function (a, b) {
    return b - a;
  });
}
console.log(reverseSort(arr1)); */

//Random Task 5
/* let arr = ["Є", "життя", "на", "Марсі"];
let arrLength = arr.map(function (item) {
  return item.length;
});
console.log(arrLength); */

//Random Task 6
/* function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(1));
*/

//Random Task 7
/* function f(x) {
  return arguments.length ? 1 : 0;
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

console.log(f(undefined)); // 1
console.log(f()); // 0
console.log(f(0));
*/

//Random Task 8
/* var d = new Date(2011, 1, 28);
console.log(d.toString());
console.log(d.toDateString()); */
/* d.setDate(d.getDate() + 2);
console.log(d); // 2 марта, 2011 */
/* var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);
console.log(d.toDateString()); */

/* var date = new Date(2014, 11, 31, 12, 30, 0);

var options = {
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

console.log(date.toLocaleString("ua", options)); // среда, 31 декабря 2014 г. н.э. 12:30:00
console.log(date.toLocaleString("en-US", options)); // Wednesday, December 31, 2014 Anno Domini 12:30 */
/* 
const event1 = new Date(1995, 3, 2);
console.log(event1.toString());
// expected output: Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
// (note: your timezone may vary)

console.log(event1.toISOString());
// expected output: 2011-10-05T14:48:00.000Z
 */

/* //Random Task
function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date(); // 3 января 2014 года
console.log(date.toString());
console.log(getWeekDay(date)); // ПТ
 */

//Task 1
/* У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:

```js
var obj = {
  className: 'open menu'
};
```

Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

```js
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений
```

P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

```js
obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'
```

Лишних пробелов после функции образовываться не должно.
 */

/* let obj1 = {
  className: "open menu menu text1",
};
let removeClass = (obj, cls) => {
  let filteredArr = [];
  let arr = obj.className.split(" ");
  filteredArr = arr.filter((item) => {
    return item !== cls;
  });
  return (obj.className = filteredArr.join(" "));
};

console.log(removeClass(obj1, "menu")); */

/* function removeClass(obj, cls) {
  var classes = obj.className.split(" ");

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      console.log(classes);
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
  }
  obj.className = classes.join(" ");
}

var obj = {
  className: "open menu menu",
};

removeClass(obj, "blabla");
removeClass(obj, "menu");
console.log(obj.className); // open */

//Task 2
/* var arr1 = ["HTML", "JavaScript", "CSS"];
let arrSorted = arr1.slice().sort();
console.log(arrSorted);
console.log(arr1); */

//Task 3
/* var arr = [1, 2, 3, 4, 5];
console.log(
  arr.sort(() => {
    let rand_arr = [-1, 1];
    return rand_arr[Math.floor(Math.random() * 2)];
  })
); */

/* var arr = [1, 2, 3, 4, 5];
let sorted = arr.sort(() => {
  return Math.random() - 0.5;
});
console.log(sorted); */

//Task 4
/* var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya, masha, vovochka];
console.log(
  people.sort((a, b) => {
    return a.age - b.age;
  })
);
people.forEach((item) => {
  console.log(item.name);
});
 */

//Task 5
/* function isPal(str) {
  let arr = str.split("");
  let newArr = arr.filter(function (item) {
    return item !== " ";
  });
  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i].toLowerCase() !== newArr[newArr.length - i - 1].toLowerCase()
    ) {
      return false;
    }
  }
  return true;
}
console.log(isPal("А роза упала на лапу Азора"));
 */
/* let str = "Ara";
function isPal(str) {
  let newArr = str.split("").filter(function (item) {
    return item !== " ";
  });
  return newArr == newArr.reverse().join("");
}
console.log(isPal(str)); */

//Task 6
/* var strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  "8-()",
]; */

/* function unique(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) == -1) {
      arr.push(str[i]);
    }
  }
  return arr;
}

console.log(unique(strings)); // кришна, харе, 8-() */

/* function unique(str) {
  let arr = [];
  for (let item of str) {
    if (!arr.includes(item)) {
      arr.push(item);
    }
  }
  return arr;
}
console.log(unique(strings)); */

//Random Task 7
/* var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(anClean(arr)); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
 */

/* var arr1 = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function anClean(arr) {
  let sorted = [];
  let final = [];
  for (let item of arr) {
    if (!sorted.includes(item.toLowerCase().split("").sort().join(""))) {
      sorted.push(item.toLowerCase().split("").sort().join(""));
      final.push(item);
    }
  }
  return final;
}

console.log(anClean(arr1));
 */

//Random Task
/* function isValidWalk(walk) {
  let x = 0,
    y = 0;
  for (let item of walk) {
    switch (item) {
      case "n":
        ++y;
        break;
      case "s":
        --y;
        break;
      case "e":
        ++x;
        break;
      case "w":
        --x;
        break;
    }
  }
  return walk.length == 10 && x == 0 && y == 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); */

// function getVillainName(birthday) {
//   const m = [
//     "Evil",
//     "Vile",
//     "Cruel",
//     "Trashy",
//     "Despicable",
//     "Embarrassing",
//     "Disreputable",
//     "Atrocious",
//     "Twirling",
//     "Orange",
//     "Terrifying",
//     "Awkward",
//   ];
//   const d = [
//     "Mustache",
//     "Pickle",
//     "Hood Ornament",
//     "Raisin",
//     "Recycling Bin",
//     "Potato",
//     "Tomato",
//     "House Cat",
//     "Teaspoon",
//     "Laundry Basket",
//   ];

//   return "The " + m[birthday.getMonth()] + " " + d[birthday.getDate() % 10];
// }
// console.log(getVillainName(new Date("May 3")));

/* function f(num) {
  if (num <= 1) return 1;
  return f(num - 1) + f(num - 2);
}
console.log(f(5));
 */

var d = new Date();
console.log(d.toString());
/* d.setDate(d.getDate() + 2);
console.log(d); // 2 марта, 2011 */
/* var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);
console.log(d.toDateString()); */
