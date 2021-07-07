//Random Task 1
/* function sumTo(n) {
  if (n > 1) {
    return n + sumTo(n - 1);
  } else return 1;
}
 */

/* function sumTo(n) {
  let k = 0;
  while (n >= 1) {
    k += n;
    --n;
  }
  return k;
} */

//Random Task 2
/* function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1);
} */

//Random Task 3
/* function randomNum(max) {
  return Math.round(Math.random() * max);
} */

//Random Task 4
/* function randNum(min, max) {
  let k = 0;
  while (true) {
    k = Math.round(Math.random() * max);
    if (k > min) break;
  }
  return k;
} */

//Random Task 4
/* function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.round(Math.random() * (myMax - myMin) + myMin);
  // Only change code above this line
} */

//Random Task 5
/* function upperFirst(str) {
  if (str == "") return "";
  return str[0].toUpperCase() + str.substring(1);
}
 */

//Task 1
/* function getFib(n) {
  if (n == 1 || n == 2) return 1;
  return getFib(n - 2) + getFib(n - 1);
}
 */

//Task 2
/* function checkSpam(str) {
  return str.indexOf("spam") >= 0 || str.indexOf("sex") >= 0 ? "True" : "False";
}
console.log(checkSpam("sex this includes")); */

//Task 3
/* function checkString(str) {
  if (str.length < 20) return str;
  return str.slice(0, 21) + "...";
}
console.log(checkString("some kind of text blalalalalalalal")); */

//Task 4
/* var f = function always(n) {
  return function () {
    return n;
  };
};

var three = f(3);
console.log(three()); */
