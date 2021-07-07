//Random Task 1
/* var user = {};
user.name1 = "Sergii";
user.surname = "Petrov";
user["name1"] = "Andrii";
user.age = 30;
delete user.name1;
console.log(user); */

//Random Task 2
/* var toTest = {
  name: "Andrii",
};

function isEmpty(obj) {
  let k = 0;
  for (var key in obj) {
    return false;
  }
  return true;
} 

console.log(isEmpty(toTest));*/

//Random Task 4
/* var toTest = {
  jun: 100,
  mid: 10,
};
 function generalSalary(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}
console.log(generalSalary(toTest)); */

//Random Task 5
/* var arr1 = [1, 2, 3];
function getLast(arr) {
  return arr[arr.length - 1];
}
console.log(getLast(arr1)); */

//Random Task 6
/* var arr1 = [1, 2, 3];

function addElement(arr, elem) {
  arr.push(elem);
  return arr;
}
console.log(addElement(arr1, 4)); */

//Random Task 7
/* let fruits = ["apple", "orange"];
fruits.push("kiwi");
console.log(fruits);
fruits[fruits.length - 2] = "pear";
console.log(fruits.shift());
console.log(fruits);
fruits.unshift("apricot", "peach");
console.log(fruits); */

//Random Task 8
/* var testarr = [7, 2, 5, 9, 1, 4];
function randomElem(arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
}
console.log(randomElem(testarr)); */

//Random Task 9
/* let testarr = [7, 2, 5, 9, 1, 4];
function findElem(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) return i;
  }
  return -1;
}
console.log(findElem(testarr, 7)); */

//Random Task 10
/* let testarr = [7, 2, 5, 9, 1, 4];
function filterRange(arr, a, b) {
  let arr1 = [];
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a == arr[i]) {
      j = i;
    } else if (b == arr[i]) k = i;
  }
  for (let y = 0; y < arr.length; y++) {
    if (y >= j && y <= k) arr1.push(arr[y]);
  }
  return arr1;
}
console.log(filterRange(testarr, 5, 9)); */

//Task 1
/* var tasksCompleted = {
  Anna: 29,
  Serg: 35,
  Elena: 1,
  Anton: 99,
};

function theBestWorker(obj) {
  let best = 0;
  for (let key in obj) {
    if (obj[key] > best) best = obj[key];
  }
  return best;
}
console.log(theBestWorker(tasksCompleted)); */

//Task 2
/* let image = {
  width: 100,
  height: 400,
  title: "Cool image",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (!isNaN(obj[key])) obj[key] *= 2;
  }
  return obj;
}

console.log(multiplyNumeric(image)); */

//Task 3
/* function createArray() {
  let arr1 = [];
  let sum = 0;
  while (true) {
    let num = prompt("Enter value");
    if (num == "" || isNaN(num) || num == null) break;
    arr1.push(+num);
    sum += +num;
  }
  return sum;
}
 */
