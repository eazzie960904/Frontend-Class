// spread

let person ={name:"noona",age:12}

//객체의 깊은 복사
let person2 = {...person} //그대로복사 -> 객체를 하나더 생성한것
let person3= person //주소값을 가져간다.
console.log(person2) //{name:"noona",age:12}
console.log(person3) //{name:"noona",age:12}


console.log(person == person2) //false -> 새로운 객체를 만든것
console.log(person == person3) //true -> 주소만 복사한것이라서 같다

let a = [1,2]
let b = [...a,3]
console.log(b) //[1,2,3]

let c = [...a,...b]
console.log(c) //[1,2,1,2,3]