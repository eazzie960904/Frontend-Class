let arr = [];
for(let i =0; i<3; i++){
    const userNum = Number(prompt("교통비. 식대. 음료비 순으로 입력"));
    arr.push(userNum);
}

const [traffic,food,drink] = arr;
const sum = traffic+food+drink;

if(isNaN(sum) || sum === 0){
    alert("잘못입력하셨습니다.");
} else if (sum<= 10000){
    alert("예산관리 잘하셨어요");
} else {
    alert("예산관리 잘하세요");
}