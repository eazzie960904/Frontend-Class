// 함수선언
// 함수 매개변수 반드시 꼭 필수X
// 함수를 호출할 때, 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수혹은 인자값 삽입
// 인자 = 매개변수

// 일반함수 혹은 function함수
// function calcSum(){
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(`1부터 10까지 더하면 ${sum}`);
// }

// calcSum();

// 익명함수
const calcSum = function(){
    let sum = 0;
    for(let i = 1; i <=10; i++){
        sum += i;
    }
    console.log(`1부터 10까지 더하면 ${sum}`);
};
calcSum();


