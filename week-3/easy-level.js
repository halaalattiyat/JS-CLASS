for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is odd");
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let sum = num1 + num2;
console.log("The sum is: " + sum);
