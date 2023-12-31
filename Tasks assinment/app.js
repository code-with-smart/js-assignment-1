// Chapter 1 (ALERT)

// ------ Ques 1

// alert("Hello, " + "Muhammad Faizan.");


// ------ Ques 2

// alert("Error! Please enter a valid password.");

// ------ Ques 3

// alert("Welcome to JS Land...\nHappy Coding!");

// ------ Ques 4

// alert("Welcome to JS Land...")
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.")

// ------ Ques 5

// alert("Hello... I can run JS through my web browser's console")

// Chapter 2 (VARIABLES FOR STRINGS)

// ------ Ques 1

// var username;

// ------ Ques 2

var myName = "Muhammad Faizan"

// ------ Ques 3

var message;
message = "Hello World";
alert(message);

// ------ Ques 4

var studentName = "Moiz sajjad";
var studentAge = "15 years old";
var studentCertification = "Certified web Mobile Development";
alert(studentName);
alert(studentAge);
alert(studentCertification);

// ------ Ques 5

var message = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(message);

// ------ Ques 6

var email = "smartfaiza53@gmail.com";
alert("My email address is " + email);

// ------ Ques 7

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// ------ Ques 8

var display = "Yah! I can write HTML content through JavaScript";
document.write(display +"<br />");

// ------ Ques 9

var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);

// Chapter 3 (VARIABLES FOR NUMBERS)

// ------ Ques 1

var age = 19;
alert("I am " + age + " " + "years old");

// ------ Ques 2

var visitCount = 17;
alert(`You have visited this site ${visitCount} times`);

// ------ Ques 3

var birthYear = 2004;
var birthYearType = typeof birthYear;

document.write("My birth year is " + birthYear + "<br />");
document.write("Data type of my declared variable is " + birthYearType);

// ------ Ques 4

var visitorName = "moiz sajjad";
var productTitle = "Shirt";
var quantity = 5;
alert(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store");

// Chapter 4 (VARIABLE NAMES: LEGAL & ILLEGAL)

// ------ Ques 1

var firstVaribale, secondVariable, thirdVariable;

// ------ Ques 2

// Legal
// var abc, $abc, _abc, abc1, newVar;

// Illega;
// var !abc, 1abc, .abc, var, my variable;

// ------ Ques 3

document.write("<h3>Rules for naming JS variables</h3>");
document.write("Variable names can only contain <b>numbers</b>, <b>$</b> and <b>_</b>. <br />")
document.write("Variable must begin with a <b>$abc</b>, <b>_abc</b> and <b>abc</b>. <br />")
document.write("Variables names are <b>case sensitive</b><br />")
document.write("Variables names should not be <b>JS keywords</b><br />")

// Chapter 5 (MATH EXPRESSIONS)

// ------ Ques 1

var firstNum = 6;
var secondNum = 9;
var total = firstNum + secondNum;
document.write("The sum of " + firstNum + " + " + secondNum + " is " + total);

// ------ Ques 2

// Subtraction

var firstNum = 6;
var secondNum = 9;
var total = firstNum - secondNum;
document.write("The sum of " + firstNum + " - " + secondNum + " is " + total);

// Multiplication

var firstNum = 6;
var secondNum = 9;
var total = firstNum * secondNum;
document.write("The sum of " + firstNum + " * " + secondNum + " is " + total);

// Division

var firstNum = 6;
var secondNum = 9;
var total = firstNum / secondNum;
document.write("The sum of " + firstNum + " / " + secondNum + " is " + total);
