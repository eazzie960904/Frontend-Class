const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circle = {
    x : 100,
    y : 100,
    radius: 30,
    dx : 4,
    dy : 4,
    color: "#222",
};

const drawCircle = () =>{
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2, false);
    ctx.fillStyle = circle.color;
    ctx.fill();
};

const move = () =>{
    ctx.fillStyle = "rgba(255,255,255, 0.5)";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    drawCircle();

    // 원의 x와 y좌표를 각각 속도 dx, dy 만큼 증가시킨다.
    // 원이 캔버스 내에서 이동하게 된다.
    
    circle.x += circle.dx;
    circle.y += circle.dy;

    if(circle.x + circle.radius > canvas.width || circle.x - circle.radius <0)
        circle.dx = -circle.dx;

    if(circle.y + circle.radius > canvas.height || circle.y - circle.radius <0)
        circle.dy = -circle.dy;
    requestAnimationFrame(move);
};

move();
