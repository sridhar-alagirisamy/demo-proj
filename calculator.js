var calc = (function () {
    function calc() {
    }
    calc.prototype.add = function (a, b) {
        return a + b;
    };
    calc.prototype.sub = function (a, b) {
        return a - b;
    };
    calc.prototype.mul = function (a, b) {
        return a * b;
    };
    calc.prototype.divi = function (a, b) {
        return a / b;
    };
    return calc;
}());
var opt = new calc();
//let choice;
var choice;
alert("1.Addition\n2.Subtraction\n3.Multiplication\n4.Division");
alert("Enter your choice");
choice = parseInt(prompt());
switch (choice) {
    case 1:
        console.log("Sum of two numbers", opt.add(parseInt(prompt()), parseInt(prompt())));
        break;
    case 2:
        console.log("Sub of two numbers", opt.sub(parseInt(prompt()), parseInt(prompt())));
        break;
    case 3:
        console.log("mul of two numbers", opt.mul(parseInt(prompt()), parseInt(prompt())));
        break;
    case 4:
        console.log("Sum of two numbers", opt.divi(parseInt(prompt()), parseInt(prompt())));
        break;
    default: console.log("Invalid option");
}
