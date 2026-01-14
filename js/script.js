const randomNumber = document.getElementById("numbers-list");
const countdownTimer = document.getElementById("countdown");

let allNumbers = "";
for (let i = 0; i < 5; i++) {
  const numbers = Math.floor(Math.random() * 50) + 1;
  console.log(numbers);
  allNumbers += numbers + " ";
}

randomNumber.innerHTML = allNumbers;

let countDownSeconds = 5;

const setCountDown = setInterval(function () {
  randomNumber.innerHTML = "";
  countDownSeconds--;
  countdownTimer.innerHTML = countDownSeconds;
  if (countDownSeconds <= 0) {
    clearInterval(setCountDown);
  }
}, 5000);
