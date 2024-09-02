const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audios = document.querySelectorAll("audio");

const deg = 45;
let i = 0;
//1)
let num = 0;

lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  i++;

  //play 누를 떄 사진 돌아감
  const pause = list.querySelector("ul li:nth-child(1)");
  const play = list.querySelector("ul li:nth-child(2)");
  const load = list.querySelector("ul li:nth-child(3)");

  //play 눌렀을 때 커버와 그림자 같이 돌아가기 원함
  play.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  });
  load.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").load();
    e.target.closest("article").querySelector("audio").play();
  });
});

// 1
const initMusic = () => {
  for (let audio of audios) {
    audio.pause();
    audio.load();
    //article요소 ->
    audio.parentElement.previousElementSibling.classList.remove("on");
  }
};

initMusic();

let active = 0;
const len = lists.length - 1;

const activation = (index, lists) => {
  for (let list of lists) {
    // on 속성을 지우고
    list.classList.remove("on");
  }
  // 가운데만 속성넣기
  lists[index].classList.add("on");
};

// 버튼 클릭시 옆으로 돌아감
prev.addEventListener("click", () => {
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});
