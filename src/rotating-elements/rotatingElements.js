const data = ["1", "2", "3", "4", "5", "6", "7", "8"];
let currentIndex = 0;

const indexHandler = (direction) => {
  if (direction === "next") {
    if (currentIndex === data.length - 1) {
      currentIndex = 0;
      console.log("Reset");
    } else if (currentIndex < data.length) {
      currentIndex++;
      console.log("Increment");
    }
    // if (direction === "prev") {
    //   if (currentIndex > 0) {
    //     currentIndex--;
    //     console.log("Decrement");
    //   } else {
    //     currentIndex = data.length;
    //     console.log("Reset");
    //   }
    // }
    console.log(currentIndex);
  }
};

// Setting the initial HTML
const parentDiv = document.getElementById("rotating-elements");
parentDiv.innerHTML = `
<a href="#" id="left-side">
  ${data[data.length - 1 - currentIndex]}
</a>
<a href="#" id="currently-selected" class="hovered">
  ${data[currentIndex]}
</a>
<a href="#" id="right-side">
  ${data[currentIndex + 1]}
</a>
`;

// const leftItem = document.getElementById("left-side").children[0];
// const middleItem = document.getElementById("middle");
// const rightItem = document.getElementById("right");

// button handling
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

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
  right.innerHTML = `${
    data[currentIndex + 1] ? data[currentIndex + 1] : data[0]
  }`;
  right.id = "currently-selected";
  left.innerHTML = `${data[data.length - 1 - currentIndex]}`;
  left.id = "right-side";

  current.innerHTML = `${data[currentIndex]}`;
  current.id = "left-side";
  current.classList.remove("hovered");
  indexHandler("next");
};

// const prevHandler = () => {
//   const current = document.getElementById("currently-selected");
//   const right = document.getElementById("left-side");
//   const left = document.getElementById("right-side");
//   current.style =
//     "width: 150px; height: 150px; font-size: 15px; filter: blur(3px); z-index: 1";
//   right.style =
//     "width: 200px; height: 200px; font-size: 25px; filter: blur(0px); z-index: 3";
//   left.style = "z-index: -1; filter: opacity(0)";
//   left.style = "z-index: 1; filter: opacity(1); filter: blur(3px);";
//   right.classList.add("hovered");
//   right.innerHTML = `${data[currentIndex + 1]}`;
//   right.id = "currently-selected";
//   left.innerHTML = `${data[data.length - 1 - currentIndex]}`;
//   left.id = "left-side";
//   current.innerHTML = `${data[currentIndex]}`;
//   current.id = "right-side";
//   current.classList.remove("hovered");
//   indexHandler("prev");
// };

// prevButton.addEventListener("click", prevHandler);
nextButton.addEventListener("click", nextHandler);
