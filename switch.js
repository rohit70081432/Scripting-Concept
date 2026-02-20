let num1 = Number(prompt(" first number: "));
let operator = prompt(" operator");
let num2 = Number(prompt(" second number: "));
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            alert("Not Divisible..");
        } else {
            result = num1 / num2;
        }
        break;
    default:
        alert("Wrong Input..");
}
document.writeln("result is : ", + result);