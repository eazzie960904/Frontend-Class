// 면접단골질문 q.이터러블에 대해 설명하시오

//1. Iterable => 순서대로 처리할 수 있는
//Iterable 객체 => 객체 안에 담겨있는 각각의 독립적인 아이템 요소를 찾아서 어떤 실행을 순서대로 처리할 수 있도록 할 수 있는 객체

// JS 안에서 Iterable 객체 => 배열 & 문자열!!

// for in 문 ("객체")

// Iterable 객체
// 1) for ...of 반복문
// 2) 전개연산자 구문
// 3) 구조분해할당

let hi = "hello";

for (let ch of hi) {
  console.log(ch);
}

let chArray = [...hi];
console.log(chArray);

let [ch1, ch2, ch3, ch4, ch5] = hi;
console.log(ch1, ch2, ch3, ch4, ch5);

const arr = [1, 2, 3, 4, 5];
console.log(arr);

let it = arr[Symbol.iterator]();
console.log(it); //Array Iterator {}

console.log(it.next()); //1, done :false
console.log(it.next()); //2, done :false
console.log(it.next()); //3, done :false
console.log(it.next()); //4, done :false
console.log(it.next()); //5, done :false
console.log(it.next()); //undefined, done: true

// 이터러블한 객체 => 이터레이터 객체 속성
// 이터레이터 객체 속성 => next()
// next()=> 반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수!!

// 교회->참세계=genesis
// 제너레이터=> 새로운 것을 생성
// 이터러블하지 못한 데이터 자료구조
// 반복문 x

// 제너레이터는 함수 => function*
// 태생적으로 이터러블하지 못한 요소들을 이터러블한 속성을 갖게끔 하기 위한 목적으로 태어난 함수

function* fnc() {
  //yeild: 일시정지
  yield 1;
  yield 2;
  yield 3;
}

const g1 = fnc();
console.log(g1); //fnc {<suspended>}

// console.log(g1.next()); //{value: 1, done: false}
// console.log(g1.next()); //{value: 2, done: false}
// console.log(g1.next()); //{value: 3, done: false}

// 호출
// fnc(); // 1,2,3

for (let i of g1) {
  console.log(i); //1,2,3
}

// for문을 사용 => 이터러블한 객체다!
