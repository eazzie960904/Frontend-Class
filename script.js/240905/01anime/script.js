anime({
  targets: ".svg2 path",
  //선을 그릴때 offset에대한 간격을 0으로 선이다.
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 10000,
  easing: "easeInOutSine",
  // loop: true,
  // direction: "alternate",
});
