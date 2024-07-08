// main slide
const slideContainerArrow = document.querySelector(".slide_container_arrow");
const slideArrows = document.querySelectorAll(".slide_container_btn");
const slidePagers = document.querySelectorAll(".slide_pager span");
const slideImg = document.querySelector(".slide_img");

// 배열
const pics = [
  "./images/animation2.png",
  "./images/travel1.png",
  "./images/flower3.png",
];
let i = 0;
let slideInterval;
let isTransitioning = false;

slideImg.style.backgroundImage = `url(https://pra9128.cafe24.com/chef/${pics[i]})`;
slidePagers[0].classList.add("active");

const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });

  slideImg.style.backgroundImage = `url(https://pra9128.cafe24.com/chef/${pics[i]})`;
  slidePagers[i].classList.add("active");
};

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
    updateSlide(i);
  }, 4000);
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

const resetSlideShow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (isTransitioning) return;
    isTransitioning = true;

    stopSlideShow();
    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }

    updateSlide(i);

    setTimeout(() => {
      isTransitioning = false;
      startSlideShow();
    }, 500);
  });
});

slidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    stopSlideShow();
    i = index;
    updateSlide(i);

    setTimeout(startSlideShow, 500);
  });
});

startSlideShow();

slideContainerArrow.addEventListener("mouseover", stopSlideShow);
slideContainerArrow.addEventListener("mouseout", resetSlideShow);
