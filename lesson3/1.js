//Task 1
/* while (true) {
  let k = +prompt("Enter a number greater than 100");
  if (!k || k > 100) break;
} */

//Task 2 ?
/* outer: for (let i = 2; i < 10; i++) {
  for (let k = 2; k < i - 1; k++) {
    if (i % k == 0) continue outer;
  }
  console.log(i);
} */

//Task 3
/* for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) console.log(i + " Buzz");
}
 */

//Task 4
/* for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
  }
} */

//Task 5 -
/* let line = "";
let n = 20;
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n; k++) {
    line += i % 2 == k % 2 ? "#" : " ";
  }
  line += "\n";
}
console.log(line); */

//Task 6
/* function pow(num, d) {
  let k = 1;
  for (let i = 0; i < d; i++) {
    k *= num;
  }
  return k;
} */
