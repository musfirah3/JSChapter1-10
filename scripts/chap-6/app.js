// Chapter:6Math Expression
// Question:1
var value = 12;
var perincerment = ++value
var postincrement = value++
var oerdecrement = --value
var postdecrement = value--
var result = value
document.write("The value of a is: " + result)

// Question:2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--
//   1 - 0 + 1 + 1
// 3
document.write("a is " + a + "<br>b is " + b + "<br>result is " + result)

// Question:2
var userName = prompt("Enter your name");
alert("Hello " + userName);

// Querstion:4
var num = +prompt("Enter any number", "5");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + num * i + "<br>")
}
// Question:5
var subject1 = prompt("Enter your first subject")
var subject2 = prompt("Enter your second subject")
var subject3 = prompt("Enter your third subject")
var total = 100
var mark1 = +prompt("Enter the marks of first subject")
var mark2 = +prompt("Enter the marks of second subject")
var mark3 = +prompt("Enter the marks of third subject")