const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// const img = new Image();
// // img.addEventListener("load", () => {
// //   ctx.drawImage(img, 0, 0);
// // });

// img.onload = function () {
//   //세개인자값까지는 필수값, 그후는 옵션
//   ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
// };

// img.src = "./cat.jpg";

const img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = "./bird.jpg";

// clipping 어떤 도형을 만들고 찍어낸다.
ctx.beginPath();
ctx.arc(380, 200, 150, 0, Math.PI * 2, false);
ctx.clip();
