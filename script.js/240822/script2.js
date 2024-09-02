const xhr = new XMLHttpRequest();

xhr.open("GET", "student3.json");
<<<<<<< HEAD
<<<<<<< HEAD
xhr.send();

const renderHTML = (students) => {
  console.log(student);
};

const result = document.querySelector("#result");
// 해당요소가 변경이 된다면 함수 실행
result.xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    renderHTML(students); //1
  }
};
=======
=======
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
xhr.send()

const renderHTML = (students)=>{
    let output ="";

    for(let student of students){
        output +=`
        <h2>${student.name}</h2>
        <ul>
        <li>전공: ${student.major}</li>
        <li>학년: ${student.grade}</li>
        </ul>
        <hr/>
        `;
    }
    const result = document.querySelector("#result");
    result.innerHTML=output
};
// 준비가 되면 함수 실행시켜라
xhr.onreadystatechange = function (){
    if(xhr.readyState ===4 && xhr.status === 200){
        const students = JSON.parse(xhr.responseText);
        renderHTML(students);
    }
<<<<<<< HEAD
};
>>>>>>> 43aa7a9512d88c620ea1c429588293603b22cbf1
=======
};
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
