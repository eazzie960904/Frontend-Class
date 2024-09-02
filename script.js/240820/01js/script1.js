// let numSet1 = new Set();

// console.log(numSet1);

//numSet1.add("one").add("two");

// console.log(numSet1);

let numSet2 = new Set([1, 2, 3]);

console.log(numSet2);

let numSet3 = new Set([1, 2, , 1, 3, 1, 5]);

console.log(numSet3);
//99% 배열의 형태를 가지고 있다.

const languages = new Set(["JS", "TS", "HTML", "CSS"]);

//key 와 value 값을 같이 쓸수 있다.
for (let language of languages.keys()) {
  console.log(language); //"JS", "TS", "HTML", "CSS"
}
