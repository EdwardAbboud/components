const data = ["1", "2", "3", "4", "5", "6", "7", "8"];
let currentIndex = 0;

// Setting the initial HTML
const parentDiv = document.getElementById("rotating-elements");
parentDiv.innerHTML = `
<a href="#" id="left-side">
  <p id="left">${data[data.length - 1 - currentIndex]}</p>
</a>
<a href="#" id="currently-selected" class="hovered">
  <p id="middle">${data[currentIndex]}</p>
</a>
<a href="#" id="right-side">
  <p id="right">${data[currentIndex + 1]}</p>
</a>
`;

// const leftItem = document.getElementById("left-side").children[0];
// const middleItem = document.getElementById("middle");
// const rightItem = document.getElementById("right");

// button handling
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// 3 bubbles
const m = document.getElementById("middle");
const l = document.getElementById("left");
const r = document.getElementById("right");

const nextHandler = () => {
  const current = document.getElementById("currently-selected");
  const right = document.getElementById("right-side");
  const left = document.getElementById("left-side");
  current.style =
    "width: 150px; height: 150px; font-size: 15px; filter: blur(3px); z-index: 1";
  right.style =
    "width: 200px; height: 200px; font-size: 25px; filter: blur(0px); z-index: 3";
  left.style = "z-index: -1; filter: opacity(0)";
  left.style = "z-index: 1; filter: opacity(1); filter: blur(3px);";
  right.classList.add("hovered");
  right.id = "currently-selected";
  left.id = "right-side";
  current.id = "left-side";
  current.classList.remove("hovered");
};

const prevHandler = () => {
  const current = document.getElementById("currently-selected");
  const right = document.getElementById("left-side");
  const left = document.getElementById("right-side");
  current.style =
    "width: 150px; height: 150px; font-size: 15px; filter: blur(3px); z-index: 1";
  right.style =
    "width: 200px; height: 200px; font-size: 25px; filter: blur(0px); z-index: 3";
  left.style = "z-index: -1; filter: opacity(0)";
  left.style = "z-index: 1; filter: opacity(1); filter: blur(3px);";
  right.classList.add("hovered");
  right.id = "currently-selected";
  left.id = "left-side";
  current.id = "right-side";
  current.classList.remove("hovered");
};

prevButton.addEventListener("click", prevHandler);
nextButton.addEventListener("click", nextHandler);
