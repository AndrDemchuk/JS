# Домашнее задание. JS. Урок 5.

## Задание 1 (Кто первым решил больше всех задач)

Напиште код который выведет сотрудника который выполнил больше всех задач.

Например:

```js
var tasksCompleted = {
  Anna: 29,
  Serg: 35,
  Elena: 1,
  Anton: 99,
};
```

## Задание 2 (Изменение численных свойств)

Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект
в котором все числовые значения у свойств умножены на 2.

```js
// Before
var image = {
  width: 100,
  height: 400,
  title: "Cool image",
};

multiplyNumeric(image);

// after
image = {
  width: 200,
  height: 800,
  title: "Cool image",
};
```

## Задание 3 (Калькулятор)

Напишите код, который:

- Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
- Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
- При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
- Выводит сумму всех значений массива когда ввод прекращен.
