const randomNumber = document.getElementById("numbers-list");
const countdownTimer = document.getElementById("countdown");
const answersInputForm = document.getElementById("answers-form");

let allNumbers = "";
for (let i = 0; i < 5; i++) {
  const numbers = Math.floor(Math.random() * 50) + 1;
  console.log(numbers);
  allNumbers += numbers + " ";
}

randomNumber.innerHTML = allNumbers;

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
