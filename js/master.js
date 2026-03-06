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
  settingsBox.classList.toggle("open");
  settingsIcon.classList.toggle("fa-spin");
});

document.addEventListener('DOMContentLoaded', () => {
  const themeRadios = document.querySelectorAll('.theme-option input[name="theme"]');
  function updateTheme(isDark) {
    if (isDark) {
        document.documentElement.style.setProperty('--white', '#000000');
        document.documentElement.style.setProperty('--black', '#ffffff');
      } 
    else {
        document.documentElement.style.setProperty('--white', '#ffffff');
        document.documentElement.style.setProperty('--black', '#000000');
      }
    }

    const checkedRadio = document.querySelector('.theme-option input[name="theme"]:checked');
    if (checkedRadio) {
        updateTheme(checkedRadio.value === 'dark');
    }
    themeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            updateTheme(radio.value === 'dark');
        });
    });


});

