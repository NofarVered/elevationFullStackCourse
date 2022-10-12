// Reservations
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};
document.getElementById("btn").addEventListener("click", function () {
  let inputValue = document.getElementById("fname").value;
  if (inputValue == "Bob") {
    alert("Welcom Bob! your order is not clamied");
  } else if (inputValue == "Ted") {
    alert("Welcom Ted! your order is clamied");
  } else {
    alert("Who r u?");
  }
});

//Visual Overload
const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

const boxCopy = document.getElementById("box");
boxCopy.addEventListener("mouseenter", function () {
  this.style.background = getRandomColor();
});
