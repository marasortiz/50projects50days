const image = document.getElementById("imgs");
const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let interval = setInterval(run, 2000);
let idx = 0;

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
      idx = img.length - 1;
    }
    
    image.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

prevButton.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

nextButton.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});


