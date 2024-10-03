const name = prompt("이름을 말씀해주세요");
const height = parseFloat(prompt("키가 어떻게 되시나요?"));
const weight = parseFloat(prompt("몸무게는 어떻게 되시나요?"));

const normalWeight = (height-100)*0.9;
let result= normalWeight-5 <= weight && normalWeight+5 >= weight;

result=result?"적정체중입니다.":"적정체중이 아닙니다."
alert(`${name}님은 ${result}`);