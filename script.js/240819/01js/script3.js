// 5. 배열 메서드
// map // filter // reduce

// map : 배열안에 있는 아이템(*요소)들에게 동일한 함수 안에 있는 기능을 동일하게 실행 및 적용  => 새로운 배열로 다시 생성
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers); //[2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]

//map은 3개까지 넣을 수 있음
const newNumbers01 = numbers.map((number, index) => index + number * 3);

console.log(newNumbers01); // [3, 7, 11, 15, 19]

// filter
//85점 이상인 애들만 새로운 배열로
const scores = [90, 35, 64, 88, 45, 92];

const highScores = scores.filter((score) => score >= 85);
//filter는 조건을 걸고 true인 애들만 입력
console.log(highScores); //[90, 88, 92]
console.log(scores); //[90, 35, 64, 88, 45, 92]
//최신상품등 json에서 가져올때, mypage에서 선택상품 삭제할때

// reduce
const numbers = [1, 2, 3, 4, 5];

// reduce(누산기(누적계산기),current) => 두개의 인자값 받음 (total,0)
//current라는 것은 객체의 각각의 값
let result = numbers.reduce((total, current) => total + current, 0);

console.log(result);

//total : 연산된 값으 누적 및 저장해놓는 변수의 역할

// 왜 필요하냐면 TS => 고차함수
// 명려형 & 선연형 프로그래밍 함수
// 저급함수
// 고급함수에서 filter와 map을 만드는데 그때 reduce 사용

//슬라이드=slick slide
//모달창=feather light
