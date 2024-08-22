const result= document.querySelector("#result");

const member1=["html","node","react"];
const member2=["css","javascript","react"];
const member3=["javascript","react"];

const subjects =[...member1,...member2,...member3];

const resultList = new Set();
subjects.forEach((subject)=>{
    resultList.add(subject);
});

console.log(resultList)