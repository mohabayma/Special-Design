
const landing = document.querySelector(".landing");
const imgs = ["imgs/01.jpg", "imgs/02.jpg", "imgs/03.jpg", "imgs/04.jpg"];

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * imgs.length);
  landing.style.backgroundImage = `url('${imgs[randomIndex]}')`;
}, 2000);

document.addEventListener('DOMContentLoaded', () => {
    const themeRadios = document.querySelectorAll('.theme-option input[name="theme"]');
    const STORAGE_KEY = 'preferred-theme';

    function applyTheme(themeValue) {
        const isDark = themeValue === 'dark';

        document.documentElement.style.setProperty('--white', isDark ? '#000000' : '#ffffff');
        document.documentElement.style.setProperty('--black', isDark ? '#ffffff' : '#000000');

        themeRadios.forEach(radio => {
            radio.checked = (radio.value === themeValue);
        });
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light');
    }

    themeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const selectedTheme = radio.value;
            applyTheme(selectedTheme);
            localStorage.setItem(STORAGE_KEY, selectedTheme);
        });
    });
});

let navbarlinks =document.querySelectorAll(".navbar a");
navbarlinks.forEach((element)=>
{
    element.addEventListener("click",()=>
    {
      navbarlinks.forEach((e)=>
      {
        e.classList.remove("active");
      })
      element.classList.add("active");
    })

});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();   
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    const settingsBox = document.querySelector('.settings-box');
    const toggleSettings = document.querySelector('.toggle-settings');
    const settingsIcon = document.querySelector(".settings-box i");

    if (settingsBox && settingsIcon) {
        // فتح/قفل بالضغط على الترس
        settingsIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsBox.classList.toggle('open');
            settingsIcon.classList.toggle("fa-spin");
        });

        // إغلاق بالضغط خارج الـ settings box
        document.addEventListener('click', (e) => {
            if (!settingsBox.contains(e.target) && !settingsIcon.contains(e.target)) {
                settingsBox.classList.remove('open');
                settingsIcon.classList.remove("fa-spin");
            }
        });
    }

});
