//JS ES6 => 혼종
// map & set
// 배열 & 객치
//배열: 인덱스 // 개수 // 넣고, 빼고
//객체: 프로퍼티 형태 (*어떤 자료가 무슨 의미인지)
//배열 +객체 => 울버린 => map
// Map => 배열의 형태를 띄고 있는 이터러블한 객체의 자료구조들의 공통적인 약점 =>중복되는 값 제어x

const bag = new Map();
bag.set("color", "red");

console.log(bag); // 0: {"color" => "red"}

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capapcity", "300ml"],
]);

console.log(myCup);
//0 :{"color" => "white"}
//1:{"material" => "ceramic"}
//2:{"capapcity" => "300ml"}
// size: 3 => length느낌

myCup.set("type", "mini");
console.log(myCup);
//0 :{"color" => "white"}
//1:{"material" => "ceramic"}
//2:{"capapcity" => "300ml"}
//3:{'type' => 'mini'}
// size: 4 => length느낌
