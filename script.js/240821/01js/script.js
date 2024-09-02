//직접 부여하는 방식
// const regexp = /|d{3}/;

// const regexp = new RegExp(/|d{3}/);

// console.log(regexp.test("Hello"));
//test() 정규표현식이 객체의 타입 잘지키고 있는지? 정상적으로 작동하는지 true/false로 나옴
// console.log(regexp.test("123"));

// const str = "ES2024 is powerfull";

// console.log(str.match(/\ES2024/));
//0
// :
// "ES2024"
// groups
// :
// undefined
// index
// :
// 0
// input
// :
// "ES2024 is powerfull"
// length
// :
// 1

// console.log(str.replace(/ES2024/, "Javascript"));
//Javascript is powerfull

// const str = "ES2024 is powerfull";
// // const regexp = /es/i;

// // console.log(regexp.test(str)); // true

// console.log(str.match(/ES\d\d\d\d/)); //ES2024

// const hello = "Hello, everyone.";

// console.log(/H/.test(hello)); // true -H가 들어만가면 true

// console.log(/^H/.test(hello)); //true
// console.log(/^h/.test(hello)); //false
// console.log(/^h/i.test(hello)); //true

// console.log(/one.$/.test(hello)); //true
// console.log(/e.$/.test(hello)); //true
// console.log(/one$/.test(hello)); //false

// const str = "ES2024";

// console.log(str.match(/[0-9]/g)); //2024
// console.log(str.match(/[^0-9]/g)); //E', 'S'

// const str = "Oooops";

// console.log(str.match(/o{2}/)); //'oo', index: 1,
// console.log(str.match(/o{2,}/)); //ooo', index: 1,
// //최소 2에서 4번
// console.log(str.match(/o{2,4}/)); //ooo', index: 1,
// console.log(str.match(/o{2,4}/i)); //Oooo', index: 0,

// const str2 = "ES2024(ES8) is powerful";
// const regexp = /ES2024|ES8/;
//빈문자도 문자로 인식하기 때문에 띄어쓰기x
console.log(regexp.test(str2)); //true

// 1) 숫자만 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/;
//^ 숫자로 시작하고 +한번이상 반복 $숫자로 끝나야함

// 2) 양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]\d*$/;

// 3) 음의 정수만 가능한 정규표현식 패턴
const regexp2 = /^\-[1-9]\d*$/;

// 4) 영문자만 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/; //i과 같은 느낌
//^시작하고 +반복허용하고 $끝난다.

// 5) 숫자와 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp4 = /^[a-zA-Z0-9]+$/;

// 6) 한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣]+$/;

// 7) 한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+$/;

// 8) 예) 문자열의 길이가 5~10개 패턴
const regexp7 = /^.{5,10}$/;
