let myCup = new Map([
    ["color","white"],
    ["material","ceramic"],
    ["capacity","300ml"],
])

console.log(myCup);

myCup.set("type","mini");
myCup.set("purpose","daily");

console.log(myCup);

console.log(myCup.get("color"));

console.log(myCup.has("color"));

console.log(myCup.delete("color"));

console.log(myCup);

// 메서드 체이닝 => 자전거 체인처럼 연결해서 사용가능
myCup.set("type","mini").set("purpose","daily");

// key값만 가져옴
console.log(myCup.keys());

// valuer값만 가져옴
console.log(myCup.values());

console.log(myCup.entries());

// 이터러블을 가지고 있으면 for반복문 가능
for(let key of myCup.keys()){
    console.log(key);

}
for(let key of myCup.values()){
    console.log(key);
}
for(let key of myCup.entries()){
    console.log(key)
}