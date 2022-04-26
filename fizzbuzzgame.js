let number = document.querySelector(".random-number");
let buttons = document.querySelectorAll(".opt-btn");
let displayResult = document.querySelector(".display-result");
let original = document.querySelector("#random-number");  //Option button to have the random number as a choice

let randomNumber = generateNumber();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let correctAnswer = determineAnswer(randomNumber);
    let userAnswer = button.innerHTML;
    let result = "";

    if (userAnswer == correctAnswer) {
      result = "Correct";
      displayResult.classList = "";
      displayResult.innerHTML = result;
      displayResult.classList.add("correct");
    } else {
      result = "Incorrect";
      displayResult.classList = "";
      displayResult.innerHTML = result;
      displayResult.classList.add("incorrect");
    }

    displayPrevResult(randomNumber, userAnswer, result);

    randomNumber = generateNumber();
  });
});

function generateNumber() {
  let randomNumber = Math.floor(Math.random() * 1001);
  number.innerHTML = randomNumber;
  original.innerHTML = randomNumber;
  return randomNumber;
}

function determineAnswer(number) {
  let answer = "";
  if (number % 3 === 0 && number % 5 === 0) {
    answer = "FizzBuzz";
  } else if (number % 3 === 0) {
    answer = "Fizz";
  } else if (number % 5 === 0) {
    answer = "Buzz";
  } else {
    answer = number;
  }

  return answer;
}

//Displaying Previous result
let prevNumber = document.querySelector(".prev-number");
let prevAnswer = document.querySelector(".prev-answer");
let prevResult = document.querySelector(".prev-result");

function displayPrevResult(number, answer, result) {
  prevNumber.innerHTML = `Number was: ${number}`;
  prevAnswer.innerHTML = `Your answer was: ${answer}`;
  prevResult.innerHTML = `Result was: ${result}`;
}

// Rules menu
let rulesBtn = document.querySelector(".how-to-btn");
let rules = document.querySelector(".rules-list");

rulesBtn.addEventListener("click", () => {
  rules.classList.toggle("toggle-rules");
});
