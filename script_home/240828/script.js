const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

ctx.font = "italic 60px serif";
ctx.fillText("Javascript", 50, 70);
ctx.font = "bold 60px sans-serif";
ctx.fillText("Javascript",50, 150)


//ctx.font = "60px arial";
//색을 채우는 것
ctx.fillText("Hello",50,70);
//라인만
ctx.strokeText("Hello",50, 150);

