const userId = document.querySelector("#userId");
const result = document.querySelector("#result");
const userDataList = [
  { id: 123, name: "곰" },
  { id: 1021, name: "사자" },
  { id: 6021, name: "여우" },
];

const findUser = (userId) => {
  const targetData = userDataList.find((data) => data.id ==== searchId);
  if()
};

userId.addEventListener("keyup", (e) => {p
  const searchId = e.target.value;

  if (isNaN(searchId)) result.innerText = "숫자가 아닙니다.";

  findUser(searchId);
});

if(targetDa === undefined || targetData ===null){="유저 검색결과 없음"}


// 어디서부터 이벤트가 시작될 것인가?

// 이벤트가 시작된 이후에 어떤 값을 생성 & 처리

// 어떻게 자료구조를 만들고 갈것인가?

// > 문법 (*매서드//속성 등)
