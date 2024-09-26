// 랜덤번호 지정
// 유가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤 번호를 맞추면, 맞췄습니다.
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 Up
// Reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNum = 0;
const playButton = document.querySelector("#playButton");
const userInput = document.querySelector("#userInput");
const resultArea = document.querySelector("#resultArea");
const resetButton = document.querySelector("#reset");
let chances = 5;
let gameOver = false;
let chanceArea = document.querySelector("#chanceArea");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}
pickRandomNum();

function play() {
  const userValue = userInput.value;

  chances--;
  chanceArea.innerHTML = `남은기회:${chances}`;

  console.log("chances,chance");

  if (userValue < computerNum) {
    resultArea.innerHTML = "up";
  } else if (userValue > computerNum) {
    resultArea.innerHTML = "down";
  } else {
    resultArea.innerHTML = "정답";
  }
  if (chances < 1) {
    gameOver: true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  //userInput 창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();
  resultArea.innerHTML = "다시도전!!";
}
