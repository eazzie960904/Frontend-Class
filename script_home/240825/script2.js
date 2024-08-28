// const xhr = new XMLHttpRequest();
// xhr.open("GET","student-2.json");
// xhr.send()

// const renderHTML = (students)=>{
//     let output = "";

//     for(let student of students){
//         output += `
//         <h2>${student.name}</h2>
//         <ul>
//         <li> 전공 : ${student.major}</li>
//         <li> 학년 : ${student.grade}</li>
//         </ul>
//         `;
//     }
//     document.querySelector("#result").innerHTML=output;
// };

// xhr.onreadystatechange= ()=>{
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const students = JSON.parse(xhr.responseText);
//         renderHTML(students);
//     }
// };

//fetch("student-2.json")는 컴퓨터에게 "이 파일을 가져와 줘!"라고 요청하는 거야. 
//마치 친구에게 책을 빌려달라고 하는 것과 비슷해. 
fetch("student-2.json")

//**응답 받기**: 
// 파일을 가져오면, 컴퓨터가 "응답이 왔어!"라고 알려줘. 이때  then((response) => response.json()) 는 
// "응답이 왔으니, 내용을 읽어볼게!"라는 뜻이야. 
// 여기서  response.json() 은 내용을 JSON 형식으로 변환하는 거야. 
.then((response)=> response.json())
//이제 학생 정보가 준비됐으니,  then((json) => {...})  부분에서 학생들의 정보를 하나씩 꺼내서 보여줄 거야. 
.then((json)=>{
    let output="";
    //"모든 학생에 대해 하나씩 처리해볼게!"라는 의미야. 
    json.forEach((student)=>{
        //output 이라는 문자열에 추가해. 이건 마치 학생 정보를 정리해서 한 페이지에 붙여놓는 것과 같아
        output += `
        <h2>${student.name}</h2>
        <ul>
        <li>전공학과 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
        </ul>
        `;
    });
    document.querySelector("#result").innerHTML = output;
})

//**오류 처리**: 
// 만약 파일을 가져오는 과정에서 문제가 생기면,  .catch((err) => console.log(err)) 가 작동해. 
// 이건 "문제가 생겼어! 이건 오류야!"라고 알려주는 거야. 
.catch((err)=> console.log(err))