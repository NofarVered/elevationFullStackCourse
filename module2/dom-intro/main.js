//4. Spot Check 1
const down = document.getElementById("down");
console.log(down);

//6. Spot Check 2
document.getElementById("ball").style.backgroundColor = "yellow";

//8. Spot Check 3
const moveRight = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0; // will parse a number, or return 0 if it can't parse
  left += 15;
  ball.style.left = left + "px";
};

// 10. Spot Check 4
const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game by: Nofar Nahum";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);

//11. Events
const box = document.getElementById("box");

const enterColor = function () {
  box.style.backgroundColor = "#c0392b";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = "#1abc9c";
  box.innerHTML = "Hover over me!";
};

//12. Spot Check 5
const clickColor = function () {
  box2.style.backgroundColor = "#8e44ad";
};

//13. Spot Check 6
const addItem = function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = "A new item!";
  document.getElementById("myList").appendChild(newItem);
};

//15. Exercises:
//Completing the Game
let arr = document.querySelectorAll(".arrow");
for (i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    const ball = document.getElementById("ball");
    const dir = this.id;
    let move = parseInt(ball.style[dir]) || 0;
    if (dir == "top" || dir == "right") {
      move += 15;
    } else {
      move += 15;
    }
    ball.style[dir] = move + "px";
  });
}
