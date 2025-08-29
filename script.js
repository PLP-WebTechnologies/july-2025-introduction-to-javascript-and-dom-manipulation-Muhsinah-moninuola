// Declare variables
let userName = "Muhsinah";
let age = 20;
let isBeginner = true;

// Conditionals
if (isBeginner) {
  console.log(userName + " is starting out with JavaScript. Age: " + age);
} else {
  console.log(userName + " is already advanced!");
}

// Function 1: Simple greeting
function greet(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}


// Example 1: For loop (countdown)
function countdown(num) {
  for (let i = num; i >= 0; i--) {
    console.log("Countdown: " + i);
  }
}

// Example 2: While loop (print first 5 even numbers)
function printEvenNumbers() {
  let i = 0;
  let count = 0;
  while (count < 5) {
    if (i % 2 === 0) {
      console.log("Even number: " + i);
      count++;
    }
    i++;
  }
}

// DOM Interaction 1: Change text when button clicked
document.getElementById("btn-greet").addEventListener("click", function () {
  document.getElementById("intro").textContent = greet("");
});

// DOM Interaction 2: Calculate sum and show result
document.getElementById("btn-sum").addEventListener("click", function () {
  let total = addNumbers(5, 7);
  alert("The sum of 5 and 7 is: " + total);
});

// DOM Interaction 3: Use loop to display countdown in list
document.getElementById("btn-loop").addEventListener("click", function () {
  let listArea = document.getElementById("list-area");
  listArea.innerHTML = ""; // clear old list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = "Countdown: " + i;
    listArea.appendChild(li);
  }
});