const xhr= new XMLHttpRequest();
xhr.open("GET","student.json");
xhr.send();

//준비가 되면 함수를 실행시켜라
xhr.onreadystatechange = function(){
    if(xhr.readyState ===4 && xhr.status === 200){
        const students = JSON.parse(xhr.responseText);
        const result = document.querySelector("#result");
        result.innerText = `${students.name}은 ${students.major}학과의 ${students.grade}학년 입니다`;
    }
};