inconst xhr = new XMLHttpRequest();

xhr.open("GET","student-2.json");
xhr.send();

const renderHTML = (students) => {
    let output="";
    
    for(let studnet of students){
        output +=`
        <h2>${studnet.name}</h2>
        <ul>
        <li>전공: ${student.major}</li>
        <li>학년: ${student.grade}</li>
        <ul>
        `
    }
    document.querySelector("#result").innerHTML = output;
};


// XHR 은 **XMLHttpRequest**의 약자로, 웹 브라우저에서 서버와 비동기적으로 데이터를 주고받기 위해 사용하는 JavaScript 객체입니다
// AJAX(Asynchronous JavaScript and XML) 기술의 일환으로 사용되며, JSON, XML, HTML 등 다양한 형식의 데이터를 주고받을 수 있습니다. 
xhr.onreadystatechange = ()=>{
    if(xhr.readyState ===4 && xhr.status ===200){
        const students = JSON.parse(xhr.responseText);
        renderHTML(students);
    }
};

// then을 왜쓰는지?
fetch("student-2.json")
.then((response) => response.json())
.then((json) =>{
    let output="";
    json.forEach((student)=>{
        output +=`
        <h2>${student.name}</h2>
        <ul>
        <li> 전공학과 : ${student.major}</li>
        <li> 학년 : ${student.grade}</li>
        </ul>
        `;
    });
    document.querySelector("#result").innerHTML = output;
})
.catch((err) => console.log(err));

//true : 요청을 비동기적으로 처리합니다. 즉, 요청을 보내고 응답을 기다리는 동안 다른 코드가 계속 실행될 수 있습니다. 
//true 를 사용하면 웹 애플리케이션이 더 원활하게 작동할 수 있습니다. 