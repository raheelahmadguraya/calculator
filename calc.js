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

console.log(operate(10, 5, "add"));
console.log(operate(10, 5, "subtract"));
console.log(operate(10, 5, "multiply"));
console.log(operate(10, 5, "divide"));