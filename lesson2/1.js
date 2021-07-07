//Task 1
/* let getYear = +prompt("Which year is now?");
getYear == 2021 ? alert("You`re right") : alert("Are you an alien? It`s 2021");
 */

//Task 2
/* let getNumber = +prompt("Enter any integer number"),
  message;
if (getNumber > 0) {
  message = 1;
} else if (getNumber == 0) {
  message = 0;
} else message = -1;
alert(message);
 */

//Task 3
/* let getLogin = prompt("Enter your login");
if (getLogin == "admin") {
  let getPassword = prompt("Enter your password");
  switch (getPassword) {
    case "passw0rd":
      alert("Welcome home");
      break;
    case null:
      alert("Canceled");
      break;
    default:
      alert("Wrong Password");
  }
} else if (getLogin == null) {
  alert("Canceled");
} else alert("Access denied");
 */

//Task 4
/* var a = 1,
  b = 2;

a + b >= 3 ? (result = "Yep!") : (result = "Noup!");
console.log(result); */

//Task 5
/* var name1 = "manager",
  text;

name1 == "admin"
  ? (text = "Hi")
  : name1 == "manager"
  ? (text = "Hello")
  : name1 == ""
  ? (text = "No login")
  : (text = "");
alert(text);
 */

//Random Task  1
/* 
if (browser == "IE") {
  alert("0, Looks like you`ve got IE");
} else if ((browser = "Chrome" || "Firefox" || "Safari" || "Opera")) {
  alert("Nice choice");
} else alert("Who`s here?"); */

//Random Task 2

/* var a = +prompt("Enter A, Please");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}
 */

//Random Task 3 /* uter: for (var i = 0; i < 3; i++) {
/*   for (var j = 0; j < 3; j++) {
    var input = prompt("Значення в координатах " + i + "," + j, "");
    if (!input) break outer;
  }
}
console.log("Ready!"); */

//Random Task 4
/* for (var i = 2; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else continue;
} */

//Random Task 5
/* let k = "";
for (var i = 1; i < 8; i++) {
  k += "#";
  console.log(k);
} */

//Random Task 6
/* function getSum(a, b) {
  return a + b;
} */

//Random Task 7
/* function minNumber(a, b) {
  return a > b ? b : a;
} */

//Random Task 8
/* function oddEven(num) {
  return num % 2 == 0 ? "even" : "odd";
} */
