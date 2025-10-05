let score = Number(prompt("Enter your score:"));
if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

let number = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
for (let fruit of fruits) {
  console.log(fruit);
}
