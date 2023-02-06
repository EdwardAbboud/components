// button handling
const nextButton = document.getElementById("next-button");

const nextHandler = () => {
  // declare variables
  const current = document.getElementById("currently-selected");
  const right = document.getElementById("right-side");
  const left = document.getElementById("left-side");
  // change currently-select to be be smaller
  current.style =
    "width: 150px; height: 150px; font-size: 15px; filter: blur(3px); z-index: 1";
  // change the right element to be bigger
  right.style =
    "width: 200px; height: 200px; font-size: 25px; filter: blur(0px); z-index: 3";
  left.style = "z-index: -1; filter: opacity(0)";
  // move all the elements to the left
  left.style = "z-index: 1; filter: opacity(1); filter: blur(3px);";
  // remove the hovered class and set the ID to left;

  right.classList.add("hovered");
  right.id = "currently-selected";
  left.id = "right-side";
  current.id = "left-side";
  current.classList.remove("hovered");
};

nextButton.addEventListener("click", nextHandler);
