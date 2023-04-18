const container = document.getElementById("container");
const colors = ["#ffffff", "#f06252", "#d94a69", "#a5366d", "#582a50"];
const number = document.getElementById("number");

let inputValue = number.value;

squares();

number.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    // Check if Enter key was pressed
    inputValue = number.value;
    console.log(inputValue); // Display the value in the console
    // Call other functions here and pass in the inputValue variable
    squares();
  }
});

function squares() {
  container.innerHTML = "";

  for (let i = 0; i < inputValue; i++) {
    console.log(inputValue);
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    container.appendChild(square);
  }
  function setColor(sq) {
    let color = getRandomColor();
    sq.style.backgroundColor = color;
    sq.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }
  function removeColor(sq) {
    sq.style.backgroundColor = "var(--sq)";
    sq.style.boxShadow = "0 0 2px var(--sh)";
  }
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
