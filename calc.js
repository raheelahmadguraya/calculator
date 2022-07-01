const add = (augend, addend) => augend + addend;

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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        alert.apply(button.id);
    })
})