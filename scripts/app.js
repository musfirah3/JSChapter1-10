// Chapter:1 Alert
// Question:1
alert("Hello!");
// Question:2
alert("Error! Please enter a valid password")
// Question:3
alert("Welcome to JS Land...\n Happy Coding!")

// Chapter:2 Variables
// Question:1
var username;

// Question:2
var myName = "Mushtaq Ahmed"

// Question:3
var message = "Hello World"
alert(message);

// Question:4
var studentName = "Musfirah"
var studentAge = 15
var subject = "Certified Mobile Application Development"
alert(studentName)
alert(studentAge)
alert(subject)

// Question: 5
var eat = "pizza"
alert(eat)
alert("pizz")

// Question:6
var email = "musfirahwaseem0@gmail.com"
alert("My email address is " + email)

// Question:7
var book = "A smarter way to learn JavaScript"
alert("I am trying to learn from the Book" + book)

// Question:8
document.write("Yah! IO can write HTML content through JavaScript")

// Question:9
var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(string)




// Chap: 3 Variables for numbers

// Question: 1
var age = "15"
alert("I am " + age + " years old")

// Question: 2
var track = 14
alert("You have visited this site " + track + " times")

// Question: 3
var brithYear = 2000
document.write("My brith year is " + brithYear + "<br> Data type of my decleared variable is number")

// Question: 4
var visitorsName = new String("John Doe")
var productTitle = new String("T-shirt(s)")
var quantity = new String("5");
document.write(visitorsName.bold() + " ordered " + quantity.bold()
    + " " + productTitle.bold() + " on XYZ Clothing store")




// Chap: 4 Variable names legal or illeagal
// Question: 1
var variable1 = "Musfirah", variable2 = "Waseem", variable3 = "Huzaifa"

// Question: 2
// Legal variables
1 - username
2 - UserName
3 - user_name
4 - username1
5 - $username
// Illegal Variables
1 - user - name
2 - 1username
3 - user#name
4 -& username
5 -% username

// Question: 3
document.write("<h1>Rules for naming JS variables</h1>" + "<br>Variable names can only contain ,numbers ,$,and _.For example $my_1stVariable" +
    "Variables must begin with a letter, $ or _. For example: $name, _name or name" +
    "<br>Variable names are case sensitive" +
    "<br>Variable names should not be JS keywords")



// Chapter: 5 Math Expression
// Question: 1
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is: " + sum);


// Question:2
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is: " + sum);
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is: " + sum);
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is: " + sum);
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is: " + sum);

// Question:3
var value
document.write("Value after variable deceleration is: " + value);
value = 5
document.write("<br>Initial value is: " + value)
value++;
document.write("<br>Value after increment is: " + value)
value += 7
document.write("<br>Value after addition is: " + value)
value--;
document.write("<br>Value after decrement is: " + value);
var division = value % 3;
document.write("<br> The remainder is: " + division)
