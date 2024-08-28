//Application
//local storage 보완점을 찾아 cookies가 나왔다.

// setItem(key,value)
// getItem(key)
// removeItem(key)
// clear() - 모든 데이터를 리셋, 원본데이터를 날림

let students = ["kim","Lee","Park"];
localStorage.setItem("students", Json.stringify(students));

let localData;

if(ljocalStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"));

localData.push("Choi");
console(localData); //["kim","Lee", "park", "choi"]