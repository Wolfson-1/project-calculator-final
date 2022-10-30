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
        add(a,b);
    case "-":
        subtract(a,b);
    case "/":
        divide(a,b);
    case "*":
        multiple(a,b);
}};