const randomNumber = document.getElementById("numbers-list");

for (let i = 0; i < 5; i++) {
  const numbers = Math.floor(Math.random() * 50) + 1;
  console.log(numbers);
}
