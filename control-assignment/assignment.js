//Task1
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
/* if (randomNumber > 0.7) {
  alert("Number is greater than 0.7");
} */

//Task2
/* let someArray = [10, 20, 100, 99];
for (let i = someArray.length - 1; i >= 0; i--) {
  console.log(someArray[i]);
}
for (let element of someArray) {
  console.log(element);
} */

//Task3
const randomNumber2 = Math.random();
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert("The second alert is shown");
}
