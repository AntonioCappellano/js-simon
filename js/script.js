const randomNumber = document.getElementById("numbers-list");
const countdownTimer = document.getElementById("countdown");
const answersInputForm = document.getElementById("answers-form");
const finalMessage = document.getElementById("message");

// genero 5 numeri casuali

let allNumbers = [];
for (let i = 0; i < 5; i++) {
  const numbers = Math.floor(Math.random() * 50) + 1;
  console.log(numbers);
  allNumbers.push(numbers);
}

randomNumber.innerHTML = allNumbers.join(" ");

// parte un timer di 5 secondi, fine timer compare il form

let countDownSeconds = 5;
countdownTimer.innerHTML = countDownSeconds;

const setCountDown = setInterval(function () {
  countDownSeconds--;
  countdownTimer.innerHTML = countDownSeconds;
  if (countDownSeconds <= 0) {
    clearInterval(setCountDown);
    randomNumber.innerHTML = "";
    answersInputForm.classList = "inline";
  }
}, 1000);

// inserisco i 5 numeri e comparo quanti ne sono stati individuati

answersInputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const userInputs = document.querySelectorAll(".form-control");

  let correctCount = 0;
  let correctNumbers = [];

  for (let i = 0; i < userInputs.length; i++) {
    const userValue = parseInt(userInputs[i].value);
    if (allNumbers.includes(userValue)) {
      correctCount++;
      correctNumbers.push(userValue);
    }
  }

  finalMessage.innerHTML = `Hai indovinato ${correctCount} numero/i corretto/i
  `;
});
