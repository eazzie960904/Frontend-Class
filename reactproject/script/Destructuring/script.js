//Destructuring
let person ={
    name:"noona",
    age:20
}

let name = person.name
let age = person.age

let {name,age}= person


// let {age}=person
// console.log(age)

// let array = [1,2,3,4]
// let [a,b]=array

// console.log(a,b) // 1,2

// 파라미터
let array = [1,2,3,4]
let [a,b,...rest]=array

console.log(rest) // [3,4]