const xhr = new XMLHttpRequest();

xhr.open("GET", "student3.json");
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
