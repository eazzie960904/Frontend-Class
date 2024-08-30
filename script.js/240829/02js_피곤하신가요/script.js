const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
console.log(circle);
const buttonAll = document.querySelectorAll("a");

//마우스좌표값
let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};

loop();

// cursorItem.style.transfrom =`transalte(${x}px, ${y}px`);
buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});
