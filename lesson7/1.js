/* Random Task 1 */
/* function getSortedClassArray(arr) {
  let count = 0;
  let unique = [];
  let sorted = [];
  for (let elem of arr) {
    if (!unique.includes(elem)) {
      unique.push(elem);
    }
  }
  for (let el of unique) {
    for (let i = 0; i < arr.length; i++) {
      if (el == arr[i]) {
        count++;
      }
    }
    console.log(count);
    sorted.splice(count - 1, 0, el);
    count = 0;
  }
  return sorted.reverse();
}
let array = [
  "link",
  "header",
  "menu",
  "menu",
  "link",
  "link",
  "link",
  "nav",
  "nav",
  "link",
  "nav",
];
console.log(getSortedClassArray(array)); */

/* Random Task 2 */
/* let classNames = [
  "header",
  "menu",
  "menu-item",
  "menu-item",
  "menu-item",
  "menu-item",
  "footer",
  "menu",
  "link",
  "link",
  "link",
];
let classNamesCount = {};
let uniqueClassNames = [];
for (let key of classNames) {
  if (classNamesCount[key]) {
    classNamesCount[key] += 1;
  } else {
    classNamesCount[key] = 1;
    uniqueClassNames.push(key);
  }
}
console.log(uniqueClassNames);
let result = uniqueClassNames.sort((a, b) => {
  return classNamesCount[b] - classNamesCount[a];
});
console.log(result);
console.log(classNamesCount); */

/* function arrClean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }
  console.log(obj);
  let result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
}
let array = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер"];
console.log(arrClean(array)); */

/* ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} имеет позицию ${index} в ${array}`);
});
 */

/* function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    console.log(i);
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

var callbacks = createFunctions(5); // create an array, containing 5 functions
console.log(createFunctions(5)); */

/* function createSecretHolder(secret) {
  let secretObject = {
    property1: secret,
    setSecret(value) {
      this.property1 = value;
    },
    getSecret() {
      return this.property1;
    },
  };
  return secretObject;
}

obj = createSecretHolder(5);
console.log(obj);
console.log(obj.getSecret());
obj.setSecret(2);
console.log(obj.getSecret()); */

/* var make_lazy = function () {
  let argArray = [];
  let innerFunction = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    argArray.push(arguments[i]);
  }
  return function () {
    return innerFunction.apply(innerFunction, argArray);
  };
};

function double(b) {
  return b * 2;
}

var lazy_value = make_lazy(double, 4);
console.log(lazy_value);
 */

function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

var callbacks = createFunctions(5); // create an array, containing 5 functions

console.log(callbacks[2]()); // must return 0
