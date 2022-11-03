//vairables
let dispValue = "";
let secondDispValue ="";
let operator = "";
let calcResult = "";

//number button query selectors
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const zeroBtn = document.querySelector(".zero");

//operator button query selectors
const addBtn = document.querySelector(".plus");
const subBtn = document.querySelector(".minus");
const divideBtn = document.querySelector(".divide");
const multiBtn = document.querySelector(".multi");
const equalBtn = document.querySelector(".equal");
const deciBtn = document.querySelector(".deci");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");

//display query selector
document.getElementById("display").innerHTML = dispValue;

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
    case "÷":
        return divide(a,b);
    case "x":
        return multiply(a,b);
}};

//calculator function (sudo code)
    //Take value input from calculator. Display on calc display: DONE VIA BUTTON EVENT LISTENER
    //parse input value to second variable on click of selected operator. Display parsed value in secondary display. 
    //add operator to second variable in display
    //take input of second variable from user
        //if equals is selected: execute sum and return value in main display
        //if another operator is selected execute previous sum & assign next operator value. Display current sum total in main display



//Numeric button event listeners
oneBtn.addEventListener('click', () => {
    dispValue += "1";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

twoBtn.addEventListener('click', () => {
    dispValue += "2";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

threeBtn.addEventListener('click', () => {
    dispValue += "3";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

fourBtn.addEventListener('click', () => {
    dispValue += "4";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

fiveBtn.addEventListener('click', () => {
    dispValue += "5";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

sixBtn.addEventListener('click', () => {
    dispValue += "6";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

sevenBtn.addEventListener('click', () => {
    dispValue += "7";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

eightBtn.addEventListener('click', () => {
    dispValue += "8";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

nineBtn.addEventListener('click', () => {
    dispValue += "9";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

zeroBtn.addEventListener('click', () => {
    dispValue += "0";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

deciBtn.addEventListener('click', () => {
    dispValue += ".";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});

//clear event listener
clearBtn.addEventListener('click', () => {
    dispValue = "";
    secondDispValue = "";
    calcResult = "";

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
    document.getElementById("secondDisp").innerHTML = secondDispValue
});

//delete event listener
delBtn.addEventListener('click', () => {
   dispValue = dispValue.slice(0, -1);

    //display query selector
    document.getElementById("display").innerHTML = dispValue;
});


//Event listener for operators
addBtn.addEventListener('click', () => {
    if (calcResult = "") {
        secondDispValue = dispValue;
        dispValue = "";
        operator = "+";
        document.getElementById("secondDisp").innerHTML = `${secondDispValue} ${operator}`;
        document.getElementById("display").innerHTML = dispValue;
    } else {
        calcResult = operate(operator,parseInt(secondDispValue),parseInt(dispValue)); 
        document.getElementById("secondDisp").innerHTML = `${calcResult} ${operator}`;
    };
});
    

addBtn.addEventListener('click', () => {
    secondDispValue = dispValue;
    dispValue = "";
    operator = "+";
    document.getElementById("secondDisp").innerHTML = `${secondDispValue} ${operator}`;
    document.getElementById("display").innerHTML = dispValue;
});

subBtn.addEventListener('click', () => {
    secondDispValue = dispValue;
    dispValue = "";
    operator = "-";
    document.getElementById("secondDisp").innerHTML = `${secondDispValue} ${operator}`;
    document.getElementById("display").innerHTML = dispValue;
});

multiBtn.addEventListener('click', () => {
    secondDispValue = dispValue;
    dispValue = "";
    operator = "x";
    document.getElementById("secondDisp").innerHTML = `${secondDispValue} ${operator}`;
    document.getElementById("display").innerHTML = dispValue;
});

divideBtn.addEventListener('click', () => {
    secondDispValue = dispValue;
    dispValue = "";
    operator = "÷";
    document.getElementById("secondDisp").innerHTML = `${secondDispValue} ${operator}`;
    document.getElementById("display").innerHTML = dispValue;
});


//equals event listener to execute sum
equalBtn.addEventListener('click', () => {
    calcResult = operate(operator,parseInt(secondDispValue),parseInt(dispValue)); 
    document.getElementById("display").innerHTML = calcResult;
    dispValue = calcResult;
});



//if statement function for operator button to sum if operator is executed & second value already exists WORK IN PROGRESS
/*
addBtn.addEventListener('click', () => {
    if (calcResult = "") {
        secondDispValue = dispValue;
        dispValue = "";
        operator = "+";
        document.getElementById("secondDisp").innerHTML = `${secondDispValue} ${operator}`;
        document.getElementById("display").innerHTML = dispValue;
    } else {
        calcResult = operate(operator,parseInt(secondDispValue),parseInt(dispValue)); 
        document.getElementById("secondDisp").innerHTML = `${calcResult} ${operator}`;
    };
});
*/