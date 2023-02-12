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
  } else if (direction === "prev") {
    if (currentIndex === 0) {
      currentIndex = data.length - 1;
      console.log("Reset");
    } else if (currentIndex > 0) {
      currentIndex--;
      console.log("Decrement");
    }
  }
  console.log(currentIndex);
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

// button handling
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const nextHandler = () => {
  // Every iteration, grab the elements
  const current = document.getElementById("currently-selected");
  const right = document.getElementById("right-side");
  const left = document.getElementById("left-side");

  // Set the styling for each visible element to be animated
  right.classList.add("hovered");
  current.classList.remove("hovered");

  // Set the inner HTML and associate the appropriate ID
  right.innerHTML = `${
    data[currentIndex + 1] ? data[currentIndex + 1] : data[0]
  }`;
  right.id = "currently-selected";
  left.innerHTML = `${data[data.length - 1 - currentIndex]}`;
  left.id = "right-side";
  current.innerHTML = `${data[currentIndex]}`;
  current.id = "left-side";

  indexHandler("next");
};

const prevHandler = () => {
  // Every iteration, grab the elements
  const current = document.getElementById("currently-selected");
  const right = document.getElementById("right-side");
  const left = document.getElementById("left-side");

  // Set the styling for each visible element to be animated
  left.classList.add("hovered");
  current.classList.remove("hovered");

  // Set the inner HTML and associate the appropriate ID
  current.id = "right-side";
  current.innerHTML = `${
    data[currentIndex + 1] ? data[currentIndex + 1] : data[0]
  }`;

  right.innerHTML = `${data[data.length - 1 - currentIndex]}`;
  right.id = "left-side";

  left.innerHTML = `${data[currentIndex]}`;
  left.id = "currently-selected";

  indexHandler("prev");
};

prevButton.addEventListener("click", prevHandler);
nextButton.addEventListener("click", nextHandler);
