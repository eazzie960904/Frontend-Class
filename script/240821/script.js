// const str = "ES2024 is powerfull";

// console.log(str.match(/\ES2024/));
// console.log(str.match(/\es2024/i));

// console.log(str.replace(/ES2024/,"Javascript"));

// const regexp=/es/i;
// console.log(regexp.test(str));

// console.log(str.match(/ES\d\d\d\d/));

// const hello = "Hello, everyone";
// console.log(/H/.test(hello));
// console.log(/^H/.test(hello));
// console.log(/^h/.test(hello));
// console.log(/^h/i.test(hello));

// const str = "ES2024";
// console.log(str.match(/[0-9]/g));
// console.log(str.match(/[^0-9]/g));

const str = "Oooops";

console.log(str.match(/o{2}/));
console.log(str.match(/o{2,}/));
console.log(str.match(/o{2,4}/));
console.log(str.match(/o{2,4}/i));

const str2 = "ES2024(EBS) is powerful";
const regexp = /ES2024|ES8/;
console.log(regexp.test(str2));
