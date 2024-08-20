const userDatalist = [
  { name: "곰", age: 18 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 62 },
];

// filter는 이터러블한 객체 안에만 써야 한다.

//유사배열이다.
const buttons = document.querySelectorAll(".button");

const updateList = (filteredList) => {
  let listHtml = "";
  filteredList.forEach((data) => {
    listHTML += `<li>${data.name}:${data.age}</li>`;
  });
  document.querySelector(".user_list").innerHTML = listHTML;
};

const onClickButton = (e) => {
  const targetAge = e.target.dataset.age;
  const filteredList = userDatalist.filter((data) => data.age >= targetAge);
  console.log(filteredList);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
