
const landing = document.querySelector(".landing");
const imgs = ["imgs/01.jpg", "imgs/02.jpg", "imgs/03.jpg", "imgs/04.jpg"];

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * imgs.length);
  landing.style.backgroundImage = `url('${imgs[randomIndex]}')`;
}, 2000);

// const settingsIcon = document.querySelector(".settings-box i");
// const settingsBox  = document.querySelector(".settings-box ");
// settingsIcon.addEventListener("click",()=>{
//   settingsBox.classList.toggle("open");
//   settingsIcon.classList.toggle("fa-spin");
// });

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

    // ────────────────────────────────
    // 1. إغلاق الـ nav-menu بالضغط خارجها
    // ────────────────────────────────
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        // فتح/قفل بالضغط على الزر
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();           // منع الـ event من الانتشار
            navMenu.classList.toggle('active');
        });

        // إغلاق بالضغط خارج الـ menu
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // ────────────────────────────────
    // 2. إغلاق الـ settings-box بالضغط خارجها
    // ────────────────────────────────
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

    // ────────────────────────────────
    // باقي الكود بتاعك (الثيم، الروابط النشطة، إلخ)
    // ────────────────────────────────
    // ... حط هنا باقي الـ event listeners اللي عندك ...
});
