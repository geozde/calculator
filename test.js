// select element and then change its content

let firstNumber = [];
let secondNumber = [];
let operator = '';
let firstNumberComplete = false;
const display = document.getElementById("display");
const debug = document.getElementById("debug");

function parseInput(input) {
    // input is del
    if(input === "del") {
        clear();
        display.textContent = '---';
    }

    // input is a number
    else if(typeof input === 'number') {
        if(!firstNumberComplete) {
            firstNumber.push(input);
        } else {
            secondNumber.push(input);
        }
        updateDisplay();
    } 
    
    // input is =. Must calculate result
    else if(input === '='){
        // 10^(length-1-index)
        let first = 0;
        let second = 0;
        let lengthFirst = firstNumber.length;
        for (let i = 0; i < lengthFirst; i++) {
            first += firstNumber[i] * 10**(lengthFirst-1-i);
        }
        let lengthSecond = secondNumber.length;
        for (let i = 0; i < lengthSecond; i++) {
            second += secondNumber[i] * 10**(lengthSecond-1-i);
        }
        let result = 0;
        // use operator to get result
        switch(operator) {
            case '+':
                result = first + second;
                break;
            
            case '-':
                result = first - second;
                break;
            
            case '*':
                result = first * second;
                break;

            case '/':
                result = first / second;
                break;
        }

        display.textContent = `Das Ergebnis ist ${result} du Dingil`;

        clear();

    } 

    // input is an operator
    else {
        firstNumberComplete = true;
        operator = input;
        updateDisplay();
    }
    
}

function updateDisplay() {
    let content = '';
    for(let i = 0; i < firstNumber.length; i++) {
        content += firstNumber[i];
    } 
    if (firstNumberComplete) {
        content += ' ' + operator + ' ';
        for (let i = 0; i < secondNumber.length; i++) {
            content += secondNumber[i];
        }
    }

    display.textContent = content;
}

function clear() {
    firstNumber = [];
    secondNumber = [];
    firstNumberComplete = false;
    operator = '';
}