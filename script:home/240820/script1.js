let numSet1 = new Set();
console.log(numSet1)

numSet1.add("one").add("two");
console.log(numSet1)


let numSet2 = new Set([1,2,3]);
console.log(numSet2)

let numSet3 = new Set([1,2,3,4,1,5,2]);
console.log(numSet3)

const languages = new Set(["JS","TS","html","CSS"])

for(let language of languages.keys()){
    console.log(language);
}