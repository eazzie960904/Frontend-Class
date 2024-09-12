let arr=[];
for(i=0;i<3;i++){
    const userNum= Number(prompt("숫자입력"));
    arr.push(userNum);
}

const [first,second,third] = arr;

const sum = first + second + third;

if(isNaN(sum) || sum ===0){
    alert("잘못입력하셨습니다.");
} else if(sum<10000){
    alert("예산관리 잘하셨습니다.");
} else{
    alert("예산관리 잘하세요");
}