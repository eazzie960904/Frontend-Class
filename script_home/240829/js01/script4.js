const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        //1에서 4사이의 랜덤한 정수로 초기화된다. 이는 원이  x축과 y축 방향으로
        // 이동하는 속도를 나타낸다.
        this.dx = Math.floor(Math.random() * 4) + 1;
        this.dy = Math.floor(Math.random() *4) + 1;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    animate(){
        this.x += this.dx;
        this.y += this.dy;

        if(this.x + this.radius > canvas.width || this.x -this.radius < 0)
            this.dx = -this.dx;

        if(this.y + this.radius>canvas.height || this.y - this.radius < 0)
            this.dy = -this.dy;

        this.draw();
    }
}

const objs = [];

for(let i =0; i <20; i++){
    // 10에서 59사이의 랜덤한 반지름을 생성
    const radius = Math.floor(Math.random()*50) +10;
    // 원의 경계를 넘어가지 않도록 radius를 고려
    const x = Math.random()*(canvas.width-radius*2)+radius;
    const y = Math.random()*(canvas.height-radius*2)+radius;
    const color =`rgb(${Math.floor(Math.random()*256)},${Math.floor(
        Math.random()*256
    )}, ${Math.floor(Math.random()*256)})`;

    // 생성된 x,y좌표, 반지름, 색상을 사용하여 새로운  circle객체를 만들고,
    // 이를 objs배열에 추가한다.
    objs.push(new Circle(x,y,radius,color));

    // 이 코드는 다양한 크기와 색상의 원을 생성하여 캔버스에 랜덤하게 배치하는 데 유용
}
console.log(objs);

// objs.forEach((obj, index) => {
//    objs.draw();
// });

const update = () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(let i =0; i <objs.length; i++){
        let obj = objs[i];
        obj.animate();
    }
    requestAnimationFrame(update);
};

update();