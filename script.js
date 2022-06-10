//basic math functions using arrow functions
add = (num1,num2) => num1 + num2;
sub = (num1,num2) => num1 - num2;
mul = (num1,num2) => num1 * num2;
div = (num1,num2) => num1 / num2;

function operate (num1,num2,operator) {
    if(operator == "+") {
        return add(num1,num2)
    }
    if(operator == "-") {
        return add(num1,num2)
    }
    if(operator == "*") {
        return add(num1,num2)
    }
    if(operator == "/") {
        return add(num1,num2)
    }
}