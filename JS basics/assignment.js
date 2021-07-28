const task3Element = document.getElementById("task-3");
firstFunc = () => {
  alert("some text");
};
task3Element.addEventListener("click", firstFunc);
secondFunc = (name) => alert(name);
thirdFunc = (str1, str2, str3) => {
  alert(str1 + str2 + str3);
};
thirdFunc("1", "2", "3");
