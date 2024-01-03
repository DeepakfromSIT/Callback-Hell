h1 = document.querySelector("h1");
h2 = document.querySelector("h2");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    h2.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("orange", 1000);
    });
  });
});
