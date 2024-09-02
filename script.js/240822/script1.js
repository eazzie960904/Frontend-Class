const xhr = new XMLHttpRequest();

<<<<<<< HEAD
<<<<<<< HEAD
xhr.open("GET", "student2.json", true);
xhr.send();

// 변화가 있으면 함수실행
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student2 = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerHTML = `
    <h1>${student2.name}</h1>
    <ul>
    <li>전공 : ${student2.major}</li>
    <li>학년 : ${student2.grade}</li>
    </ul>
    `;
  }
};
=======
=======
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
xhr.open("GET", "student2.json");
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState ===4 && xhr.status ===200){
        const student2 =JSON.parse(xhr.responseText);
        const result = document.querySelector("#result");
        result.innerHTML=`
        <h1>${student2.name}</h1>
        <ul>
        <li>전공 : ${student2.major}</li>
        <li>학년 : ${student2.grade}</li>
        </ul>
        `;
    }
<<<<<<< HEAD
};
>>>>>>> 43aa7a9512d88c620ea1c429588293603b22cbf1
=======
};
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
