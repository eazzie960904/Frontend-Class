let hi = "hello";

for(let ch of hi){
    console.log(ch);
};

// let chArray=[...hi];
// console(chArray);

let [ch1,ch2,ch3,ch4,ch5]=hi;
console.log(ch1,ch2,ch3,ch4,ch5);

const arr=[1,2,3,4,5];
console.log(arr);

let it = arr[Symbol.iterator]();
console.log(it);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function* fnc( ){
    yield 1;
    yield 2;
    yield 3;
    }

const g1 = fnc();
console.log(g1);

console.log(g1,next());
console.log(g1,next());
console.log(g1,next());
console.log(g1,next());

for(let i of g1){
    console.log(i);
}