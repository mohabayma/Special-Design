
const landing = document.querySelector(".landing");
const imgs = ["imgs/01.jpg", "imgs/02.jpg", "imgs/03.jpg", "imgs/04.jpg"];
//Change Theme
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

//Random Backgromds Settings
let backgroundOption= true;
let backgroundInterval;
let backgroundLocalItem = localStorage.getItem("background_option");
if(backgroundLocalItem !== null)
{
    if(backgroundLocalItem === 'true')
    {
        backgroundOption = true;
    }
    else
    {
        backgroundOption = false;
    }
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active");

    });
    if(backgroundLocalItem === 'true')
    {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }
    else
    {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    const RandomBackEl= document.querySelectorAll(".random-backgrounds span");
    RandomBackEl.forEach(span => {
    span.addEventListener('click', (e)=> {
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active")
        })
        e.target.classList.add("active");
        if (e.target.dataset.background === 'yes')
        {
            backgroundOption=true;
            RandomizeImages();
            localStorage.setItem("background_option",true)
        }
        else
        {
            backgroundOption=false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option",false)
        }
    })
    });
})
//Random Backgromds Option
function RandomizeImages()
{
    if(backgroundOption===true)
    {
        backgroundInterval=setInterval(() => {
        const randomIndex = Math.floor(Math.random() * imgs.length);
        landing.style.backgroundImage = `url('${imgs[randomIndex]}')`;
        }, 2000);
    }
}
RandomizeImages();
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
        settingsIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsBox.classList.toggle('open');
            settingsIcon.classList.toggle("fa-spin");
        });

        document.addEventListener('click', (e) => {
            if (!settingsBox.contains(e.target) && !settingsIcon.contains(e.target)) {
                settingsBox.classList.remove('open');
                settingsIcon.classList.remove("fa-spin");
            }
        });
    }

});
