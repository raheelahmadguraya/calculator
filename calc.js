const add = (augend, addend) => parseInt(augend) + parseInt(addend);

const subtract = (minuend, subtrahend) => minuend - subtrahend;

const multiply =  (multiplicand, multiplier) => multiplicand * multiplier;

const divide = (dividend, divisor) => dividend / divisor;

const operate = (operandA, operandB, operator) => {
    
    let key = operator;
    
    switch(key){
        case "add":
            return add(operandA, operandB);
            break;
        case "subtract":
            return subtract(operandA, operandB);
            break;
        case "multiply":
            return multiply(operandA, operandB);
            break;
        case "divide":
            return divide(operandA, operandB);
            break;    
    }

}
let operand1 = '';
let operand2 = '';
let operator = null;

const operands = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.ops');
const display = document.querySelector('#result');
const clear = document.querySelector('#clrBttn');
const equal = document.querySelector('#equal');
const negate = document.querySelector('#negative');

const setDisplay = (btn) => {
    let dsp = display.textContent;
    if (btn.className === 'num' && operator === null) {
        updateDsp = dsp + '' + btn.value;
        display.textContent = updateDsp;
    }
    if (btn.className === 'ops' && operator === null) {
        updateDsp = dsp + ' ' + btn.value + ' ';
        display.textContent = updateDsp;
    }
    if (btn.className === 'num' && operator != null) {
        updateDsp = dsp + '' + btn.value;
        display.textContent = updateDsp;
    }
}


const storeOp = op => {
    if (op.className === 'num' && operator === null) {
        operand1 = operand1 + '' + op.value;
    }
    if (op.className === 'ops' && operator === null) {
        operator = op.id;
    }
    if (op.className === 'num' && operator != null) {
        operand2 = operand2 + '' + op.value;
    }
}

const evaluate = () => {
    if (operator === null){
        display.textContent = operand1;
    } else {
    operand1 = operate(operand1, operand2, operator);
    operand2 = '';
    operator = null;
    display.textContent = operand1;
    }
}

operands.forEach((nums) => {
    nums.addEventListener('click', event => {
        setDisplay(nums);
        storeOp(nums);
    })
})

let opCounter = 0;
operators.forEach((ops) => {
    ops.addEventListener('click', event => {
        if (opCounter > 0){
            console.log('case1');
            evaluate();
            setDisplay(ops);
            storeOp(ops);
        }
        if (opCounter === 0){
            console.log('case2')
            setDisplay(ops);
            storeOp(ops);
            opCounter++;
        }
    })
})

negate.addEventListener('click', event => {

})

clear.addEventListener('click', event => {
    display.textContent = '';
    opCounter = 0;
    operand1 = '';
    operand2 = '';
    operator = null;
})

equal.addEventListener('click', event => {
    evaluate();
})