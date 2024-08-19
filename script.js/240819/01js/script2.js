//1. 매개변수 기본값
//혹시나 message 입력 못했을때

const hello = (name, message = "안녕하세요!") => {
  console.log(`${name}님 ${message}`);
};

hello("원빈", "반갑습니다");
hello("현빈");

// 2. 전개연산자

// 1) 함수의 매개변수
const addNum = (...numbers) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return sum;
  // 재활용이 가능한 코드
};

// 인자값은 차고 넘치는데 매개변수가 없다

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3));
console.log(addNum(1, 2, 3, 4, 5));

// 2) 참조타입 변수값의 독립화
const fruits = ["apple", "banana", "cherry"];
const favorite = [...fruits];
// 전개연산자로 복제는 새로 만들겠다는 뜻
// 그냥 fruit는 복사 느낌 => 원본데이터 날라가니까 쓰지말기

favorite[1] = "grape";

console.log(fruits, favorite);

// 3) 서로다른 2개의 배열을 하나로 병합
// 원래는 concat을 썼었음 -> ES6 들어온 이후 전개연산자 사용
const animal = ["bird", "cat"];
const fruits01 = ["melon", "pineapple"];

console.log(animal.concat(fruits01));
console.log([...animal, ...fruits01]);

//4) 구조 분해 할당, 전개연산자 구문
let [teacher, ...students] = ["kim", "Lee", "park", "choi"];
console.log(teacher, student);

//중첩배열
console.log(animal, fruits01); //[bird,cat][melon,pineapple]
console.log([...animal, ...fruits01]); //[bird,cat,melon,pineapple]

// 3.객체 key 접근방법

const book = {
  title: "Javascript",
  pages: 500,
};

// 온점 표기법
book.published = "2024-08-19";

console.log(book);

// 대괄호 표기법 => 객체의 키를 가져와야한다
console.log(book["title"]);

// 객체 키 생성 방법

const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
};

const obj = {
  [fn()]: "함수 키",
  [`${add(10, 20)}key`]: "계산 키",
};

console.log(obj);

// 객체 축약법

let user = {
  name: "슛돌이",
};

user.age = 25;

console.log(user);

// 객체 선언 시, key 네이밍 === value값으로 할당하고자 하는 매개변수의 이름이 동일!

// 객체 축약: 객체 선언시 키와 매개변수의 이름이 같을 경우 생략
const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

const user1 = makeUser("영심이", 20);

console.log(user1);

// 객체에 심벌키 사용방법

let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2); //false
// 심벌키는 유일무의한 값을 찾기위해 사용
// 대기업 로그인시 같은 id값 못만들게 할때

const id = Symbol("id");
const tel = Symbol("telephone number");

const member = {
  name: "David",
  age: 20,
  [id]: 1234,
  [tel]: () => {
    prompt("당신의 전화번호는?");
  },
};

console.log(member);

for (let item in member) {
  console.log(`${item}`); //name,age
}

// 객체 안에 있는 key값을 은폐하고 싶을 때 사용가능!

console.log(member[id]);
console.log(member[tel]());

// 4. 구조분해할당
// JS 컴포넌트화 => 힘수형 // Classs

const fruits02 = ["사과", "복숭아"];

//const apple = fruits02[0];
//const peach = fruits02[1];

const [apple, peach] = fruits02;

const member03 = {
  name: "daivd",
  age: 20,
};

const { name: userName, age } = member03;
console.log(userName, age);
