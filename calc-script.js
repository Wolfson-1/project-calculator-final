// addition funciton
function add (a,b) {
return a + b;
};

// subtraction function 
function subtract (a,b) {
    return a - b;
};

// multiplication function
 function multiply (a,b) {
    return a * b;
};

// dividing function 
function divide (a,b) {
    return a / b;
};

//operation function 
function operate(operator, a, b) {
switch (operator) {
    case "+":
        return add(a,b);
    case "-":
        return subtract(a,b);
    case "/":
        return divide(a,b);
    case "*":
        return multiply(a,b);
}};