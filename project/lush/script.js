// nav event
const navBtn = document.querySelector("#nav_icon");
console.log(navBtn)
navBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav_active");
});