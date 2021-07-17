/* Sample 1 */
///////////////
/* class Human {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  };
}
class Person extends Human {
  name = "Max";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}
const person = new Person();
person.printMyName();
person.printGender();
 */

/* Sample 2 */
//////////////
/* const numbers = [1, 2, 3];
const newArray = [...numbers, 4];
const checkArray = [numbers, 4];
console.log(newArray);
console.log(checkArray); */

/* Sample 3 */
//////////////
/* const someObject = {
  name: "Tomas",
};

const trainObject = {
  ...someObject,
  age: 28,
};
console.log(trainObject);
 */

/* Sample 4 */
//////////////
/* const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
 */

/* Sample 5 */
///////////////
/* Object Destructing */
/* const sampleObj = {
  first_name: "Slavko",
  surname: "Didenko",
};
const { first_name } = sampleObj;
console.log(first_name);
 */

/* Array Destructing */
/* const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); */

/* Sample 7 */
/* const array1 = [5, 12, 8, 130, 44];
console.log(array1.findIndex((element) => element > 13)); */
// expected output: 3
