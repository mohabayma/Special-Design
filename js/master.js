document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');
    if (menu) {
      menu.classList.toggle('active');
    }
  });
});

const landing = document.querySelector(".landing");
const imgs = ["imgs/01.jpg", "imgs/02.jpg", "imgs/03.jpg", "imgs/04.jpg"];

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * imgs.length);
  landing.style.backgroundImage = `url('${imgs[randomIndex]}')`;
}, 2000);

const settingsIcon = document.querySelector(".settings-box i");
const settingsBox  = document.querySelector(".settings-box ");
settingsIcon.addEventListener("click",()=>{
  settingsBox.classList.toggle("open")
  settingsIcon.classList.toggle("fa-spin")
});

