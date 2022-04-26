let startNumber = document.querySelector("#start-number");
let endNumber = document.querySelector("#end-number");
let fizzBuzzBtn = document.querySelector(".fizzBuzz-btn");
let resultArea = document.querySelector(".results-area");

fizzBuzzBtn.addEventListener("click", () => {
  let start = startNumber.value;
  let end = endNumber.value;

  // Reverting display area to grid
  resultArea.classList.remove("reset-result-area");

  let errorMsg = validateInput(start, end);
  if (errorMsg) {
    resultArea.classList.add("reset-result-area");
    resultArea.innerHTML = `<h1 class="error-input">${errorMsg}</h1>`;
    setTimeout(() => {
      resultArea.innerHTML = "";
    }, 3000);
    return;
  } else {
    generateResults(start, end);
  }

  // resultArea.innerHTML = "";
  // startNumber.value = "";
  // endNumber.value = "";
});

function reset() {}

function generateResults(start, end) {
  start = Number(start);
  end = Number(end);

  for (let number = start; number <= end; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
      resultArea.innerHTML += `<span class="result fizzbuzz">FizzBuzz</span>`;
    } else if (number % 3 == 0) {
      resultArea.innerHTML += `<span class="result fizz">Fizz</span>`;
    } else if (number % 5 == 0) {
      resultArea.innerHTML += `<span class="result buzz">Buzz</span>`;
    } else {
      resultArea.innerHTML += `<span class="result">${number}</span>`;
    }
  }
}

function validateInput(start, end) {
  if (isNaN(start) && !isNaN(end)) return "Starting value must be a number";
  if (isNaN(end) && !isNaN(start)) return "Ending value must be a number";
  if (isNaN(start) && isNaN(end))
    return "Invalid values. Only numbers are allowed";
  if (start < 1 || end < 1)
    return "Both starting and ending values cannot be less than 1";
  if (Number(end) < Number(start))
    return "Ending value cannot be less than starting number";
}
