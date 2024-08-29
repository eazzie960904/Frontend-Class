const number = prompt("화씨를 입력해봐");
const sum = (number - 32) / 1.8;

console.log(sum);

const fah = parseFloat(prompt("화씨온도를 입력하세요", "ex.45"));

const cel = ((fah - 32) / 1.8).toFixed(2);

alert(`화씨온도는 ${fah}도는 섭씨온도 ${cel}도 입니다.`);
