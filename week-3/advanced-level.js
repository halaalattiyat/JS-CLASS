let numbers = [12, 5, 20, 25, 7];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("The largest number is:", largest);

let word = prompt("Enter a word:");
let reversed = word.split("").reverse().join("");
console.log("Reversed:", reversed);

let n = Number(prompt("Enter a number:"));
let isPrime = true;
if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(n + " is a prime number");
} else {
  console.log(n + " is not a prime number");
}


let ages = [12, 18, 25, 30, 15];
let adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);
