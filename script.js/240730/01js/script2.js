// 사용자의 몸무게가 적정체중인가?
// 적정체중 = (본인의 키-100)*0.9 => 오차범위 5
const name = prompt("이름을 말씀해주세요", "ex.홍길동");
const height = parseFloat(prompt("키가 어떻게 되시나요?", "182.4"));
const weight = parseFloat(prompt("몸무게 얼만데?", "60"));

const normalweight = (height - 100) * 0.9;
let result = weight >= normalweight - 5 && weight <= normalweight + 5;

//조건식을 굉장히 쉽고, 간편하게 사용할 수 있는 3항 조건 연산자!!
result = result ? "적정체중입니다" : "적정체중이 아닙니다";

alert(`${name}님은 ${result}`);