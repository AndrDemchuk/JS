//Task 1;
/* let a, b;
function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}

function applyF(binaryFunc) {
  return function (a) {
    return function (b) {
      return binaryFunc(a, b);
    };
  };
}
let addFunc = applyF(add);
console.log(addFunc(2)(3));
console.log(applyF(mul)(3)(4)); */

// Task 2
/* let user = {
  name: "Іван",
  //метод
  sayHi: function () {
    console.log("Привіт!");
  },
  logName: function () {
    console.log(this.name); //this - це контекст, в якому була викликана наша функція
  },
};

user.sayHi();
user.logName(); */

//Task 3
/* let calculator = {
  a: null,
  b: null,
  read: function () {
    this.a = +prompt("Enter a");
    this.b = +prompt("Enter b");
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul()); */

//Task 1(Homework)
/* var ladder = {
  step: 0,
  up: function () {
    // вверх по лестнице
    this.step++;
    return ladder;
  },
  down: function () {
    // вниз по лестнице
    this.step--;
    return ladder;
  },
  showStep: function () {
    // вывести текущую ступеньку
    alert(this.step);
    return ladder;
  },
};

console.log(ladder.up().up().down().up().showStep()); */

//Task 2 (Homework)
/* function Calculator() {
  let methods = {
    "+": (a, b) => {
      return a + b;
    },
    "-": (a, b) => {
      return a - b;
    },
  };
  this.calculate = function (str) {
    let strarray = str.split(" ");
    let anum = +strarray[0];
    let operator = strarray[1];
    let bnum = +strarray[2];
    if (methods[operator] && isFinite(anum)) {
      return methods[operator](anum, bnum);
    } else {
      return "Error";
    }
  };
  this.addMethod = function (symb, func) {
    if (!methods[symb]) {
      methods[symb] = func;
    }
  };
}

var powerCalc = new Calculator();
powerCalc.addMethod("*", function (a, b) {
  return a * b;
});
powerCalc.addMethod("/", function (a, b) {
  return a / b;
});
powerCalc.addMethod("**", function (a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 / 3");
console.log(result); // 8 */

//Task 3
/* function User(fullName) {
  this.fullName = fullName;
  Object.defineProperties(this, {
    firstName: {
      get: function () {
        let parts = this.fullName.split(" ");
        return parts[0];
      },
      set: function (value) {
        let parts = this.fullName.split(" ");
        this.fullName = value + " " + parts[1];
      },
    },
    lastName: {
      get: function () {
        let parts = this.fullName.split(" ");
        return parts[1];
      },
      set: function (value) {
        let parts = this.fullName.split(" ");
        this.fullName = parts[0] + " " + value;
      },
    },
  });
}

var vasya = new User("Доктор Зойберг");
console.log(vasya.firstName);
vasya.firstName = "Ема";
console.log(vasya.fullName);
vasya.lastName = "Вотсон";
console.log(vasya.fullName);
 */

//Task 4
Article.count = 0;
function Article() {
  this.created = new Date();
  Article.count++;
  Article.last_date = this.created;
  // ... ваш код ...
}

Article.showStats = function () {
  return "Всього: " + this.count + ". Останній: " + this.last_date;
};
new Article();
new Article();
console.log(Article.showStats()); // Всего: 2, Последняя: (дата)

/* var d = new Date(2011, 1, 28);
console.log(d.toString());
console.log(d.toDateString()); */
/* d.setDate(d.getDate() + 2);
console.log(d); // 2 марта, 2011 */
/* var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);
console.log(d.toDateString()); */
