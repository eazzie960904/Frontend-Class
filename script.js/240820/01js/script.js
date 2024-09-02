// let bag = new Map();

// //set(key, value);
// bag.set("color", "red");
// console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
console.log(myCup);

myCup.set("type", "mini");
myCup.set("purpose", "daily");

console.log(myCup);

// 메서드 체이닝 => 자전거 체인처럼 연결해서 사용가능
myCup.set("type", "mini").set("purpose", "daily");

console.log(myCup.get("color")); //wthie
console.log(myCup.size); //5
console.log(myCup.has("color")); //true => 존재하는지 안하는지 참/거짓 여부
console.log(myCup.delete("type")); //true
console.log(myCup); //Map(4) {'color' => 'white', 'material' => 'ceramic', 'capacity' => '300ml', 'purpose' => 'daily'}

// <console.log(myCup.clear()); //undefined
// console.log(myCup); //Map(0) {size: 0}>

// key값만 가져옴
console.log(myCup.keys()); //{'color', 'material', 'capacity', 'purpose'}
// value값만 가져옴
console.log(myCup.values()); //{'white', 'ceramic', '300ml', 'daily'}
console.log(myCup.entries()); //{'color' => 'white', 'material' => 'ceramic', 'capacity' => '300ml', 'purpose' => 'daily'}

// 이터러블을 가지고 있으면 for반복문 가능
for (let key of myCup.keys()) {
  console.log(key);
  //['color', 'white']
  //0:"color"
  //1:"white"
  //length:2
}
for (let key of myCup.values()) {
  console.log(key);
}
for (let key of myCup.entries()) {
  console.log(key);
}
