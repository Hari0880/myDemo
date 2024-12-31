
function calc(a, b) {
    let add = a + b;
    console.log("Addition: " + add);

    let sub = a - b;
    console.log("Subtraction: " + sub);

    let mul = a * b;
    console.log("Multiplication: " + mul);

    let div = 0;
    if (b === 0) {
        console.log("Division: Undefined (cannot divide by zero)");
    } else {
        div = a / b;
        console.log("Division: " + div);
    }
}


function getUserInput() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    
    calc(num1, num2);
}


getUserInput();
