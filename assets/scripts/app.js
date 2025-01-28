let curResult = 0;
let curCalculation = '0';

addBtn.addEventListener('click', Add);
subtractBtn.addEventListener('click', Subtract);
multiplyBtn.addEventListener('click', Multiply);
divideBtn.addEventListener('click', Divide);

function Add() {
    let userInput = GetInput();
    if (!isNaN(userInput)) {
        OperateAndPrintResult('+', userInput);
    }
}

function Subtract() {
    let userInput = GetInput();
    if (!isNaN(userInput)) {
        OperateAndPrintResult('-', userInput);
    }
}

function Multiply() {
    let userInput = GetInput();
    if (!isNaN(userInput)) {
        OperateAndPrintResult('*', userInput);
    }
}

function Divide() {
    let userInput = GetInput();
    if (!isNaN(userInput)) {
        if (userInput != 0) {
            OperateAndPrintResult('/', userInput);
        } else {
            toastr.options.positionClass = 'toast-top-center';
            toastr.options.progressBar = true;
            toastr.options.timeOut = '1000'
            toastr.warning('Cannot divide by 0');
        }
    }
}

function OperateAndPrintResult(operation, userInput) {
    switch(operation) {
        case '+':
            curResult += parseFloat(userInput);
            break;
        case '-':
            curResult -= parseFloat(userInput);
            break;
        case '*':
            curResult *= parseFloat(userInput);
            break;
        case '/':
            curResult /= parseFloat(userInput);
            break;
    }
    curCalculation = `(${curCalculation} ${operation} ${userInput})`;
    outputResult(curResult, curCalculation);
}

function GetInput() {
    return userInput.value;
}

function Add (num1, num2) {
    return num1 + num2;
}