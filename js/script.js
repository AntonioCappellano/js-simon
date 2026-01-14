const randomNumber = document.getElementById("numbers-list");

let allNumbers = "";
for (let i = 0; i < 5; i++) {
  const numbers = Math.floor(Math.random() * 50) + 1;
  console.log(numbers);
  allNumbers += numbers + " ";
}

randomNumber.innerHTML = allNumbers;
