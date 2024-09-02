// 사용자로부터 어떤 숫자를 받습니다.
// 사용자에게 받은 숫자가 "소수"이면 바탕화면에 "00숫자는 소수입니다."
// 만약아니라면, "00숫자는 소수가 아닙니다."
// 소수 = 수숫점을가지고 x
// 1은 소수가 아닙니다.
// 1과 자기 자신만으로 나눠질수 있는 숫자
// 실수

const number = Number(prompt("숫자를 입력하세요"));
let isPrime;

if(number === 1){
    document.write(`1은 소수가 아닙니다.`);
} else if (number === 2){
    document.write(`2는 소수입니다.`);
    isPrime = true;
} else{
    for(let i =2; i < number; i++){
        if (number % i === 0){
            isPrime = false;
            break;
        }else{
            isPrime = true;
        }
    }
    
    if(isPrime){
        document.write(`${number}는 소수입니다`);
    }else{
        document.write(`${number}는 숫자가 아닙니다.`);
    }
}