let pets = ["dog", "cat", "mouse"];
pets[0] = "hamster";
console.log(pets);

//이터러블 객체

//for // for of // forEach
//배열 선언 값
//1) 복수형

const colors = ["red", "green", "blue", "white", "black"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

초기값 // 범위 // 증감

colors.forEach((color, index) => {
  console.log(`colors[${index}] : ${color}`);
});

//3개까지 쓸수 있나?
colors.forEach((color, index, array) => {
  console.log(`[${array}][${index}] : ${color}`);
});

const vegitable = ["양상추", "토마토", "피클"];
const cheese = ["모짜렐라", "슈레드"];
const meat = ["불고기"];

concat= 서로다른 두배열을 하나로
const meatBurger = vegitable.concat(meat);

console.log(meatBurger);

전개연산자
const cheeseBurger = [...vegitable, ...cheese];
console.log(cheeseBurger);

let numbers = [6, 9, 3, 21, 18];
console.log(numbers);
console.log(numbers.reverse());

let week = ["sun", "mon", "tue"];
let values = [5, 20, 3, 11, 4, 15];

console.log(week);

// sort=오름차순
console.log(week.sort());

console.log(values);
console.log(values.sort());
[11,15,20,3,4,5]

//sort=> 개발자가 정의하고자 하는 함수를 콜백함수로 반드시 입력

values.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === 0) return 0;
});

console.log(values);

values.sort((a, b) => {
  return a - b;
});

console.log(values);

let animals = ["lion", "bear", "bird"];

console.log(animals);
["lion", "bear", "bird"];

animals.pop();
console.log(animals);
["lion", "bear"];

animals.push("tiger");
console.log(animals);
//['lion', 'bear', 'tiger']

let fruits = ["apple", "pear", "banana"];

fruits.shift();
console.log(fruits);
// ['pear', 'banana']

fruits.unshift("cherry");
console.log(fruits);
//['cherry', 'pear', 'banana']

let subjects = ["html", "css", "javascript", "react", "typescript"];

//splice = 추출
console.log(subjects.splice(2));
//['javascript', 'react', 'typescript']
//값하나만 쓰면 1부터 끝까지

let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(week.splice(1, 5));
// (인덱스값,갯수)
//['mon', 'tue', 'wed', 'thu', 'fri']

// console.log(week.splice(1, 5, "hoilday"));
//['sun', 'hoilday', 'sat']
console.log(week.splice(4, 0, "holiday"));
//['sun', 'mon', 'tue', 'wed', 'holiday', 'thu', 'fri', 'sat']
console.log(week);

let colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2));
//['blue', 'white', 'black']
console.log(colors.slice(1, 4));
//['green', 'blue', 'white']

console.log(colors);
// ['red', 'green', 'blue', 'white', 'black'] =>원본 안날라감
