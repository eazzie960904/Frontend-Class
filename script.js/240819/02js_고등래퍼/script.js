const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");

const play = () => {
  playButton.innerText = "||";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

// 볼륨 조절
const setVolume = (e) => {
  video.volume = e.target.value;
};

const formatting = (time) => {
  //60으로 나눴을때 나머지 = 초
  let sec = Math.floor(time % 60);
  //60으로 나눴을때 몫 = 분
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

// 플레이 버튼 눌렀을때 재생, 스톱
playButton.addEventListener("click", togglePlay);
// 영상 눌렀을때 재생, 스톱
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
// 볼륨 조절
volumeBar.addEventListener("change", setVolume);
