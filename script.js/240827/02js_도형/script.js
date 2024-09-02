const canvas = document.querySelector("canvas");

//canvas는 API 속성값을 갖고있다.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgbC(200, 0, 0)"
ctx.strokeStyle="rbv(0,0,0}";

ctx.fillRect

ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect=(10,10,50,100)

ctx clearRect(70,10 50,100)

// 10,10에서 시작하고 50,100까지 색칠
ctx.fillRect(10, 10, 50, 100);

console.log(ctx);

// canvas API

// 각도를 계산하는 방법

// 1.60분법 : 인간의 편의 => 원 360도 // 몇 도

// 2.호도법: 자연의 법칙
//부채꼴 => 및변(*반지름) = 호의 둘레와 같다면, 무조건 해당 부채꼴 내각은 57.296도 = 1래디언
//3.14 = 180도 = 파이
//3래디언 = 171.888
// 8.112

// 사각형을 만들고자 할 때 사용하는 매서드 함수

// 10,10에서 시작하고 50,100까지 색칠
// fillRect(x,y,width,height) : 사각형 요소의 색상을 채워줄 수 있도록 하는 함수
//strokeReact(x,y,width,height) : 사각형 아웃라인 선을 그려주도록 하는 함수
// clear(x,y,width,height): 사각형 형태의 특정 요소만큼을 지우고자 할 때 사용하는 함수

// 사각형을 만들고자 할 때 사용하는 매서드 함수
// fillStyle = "색상": 해당도형의 색상을 채울 때 사용할 수 있는 속성;

//storkeStyle = "색상": 해당 도형의 외곽선의 아웃라인 함수
