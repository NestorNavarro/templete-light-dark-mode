const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nava = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

//Flags Light or Dark mode
const darkFlag = false;
const lightFlag = true;

const arrayImages = [];

// getImage from DOM
function getImages() {
    const elements = document.querySelectorAll('.about-container img');
    elements.forEach((element) => {
        arrayImages.push(element);
    });
}

// Dark or Light Images
function imageMode(color) {
    arrayImages[0].src = `./img/undraw_proud_coder_${color}.svg`;
    arrayImages[1].src = `./img/undraw_feeling_proud_${color}.svg`;
    arrayImages[2].src = `./img/undraw_conceptual_idea_${color}.svg`;
}

// Check the theme 
function toggleLightDarkMode(isLight) {
    nava.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ?'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' :  'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') :  
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
        isLight ? imageMode('light') : imageMode('dark');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleLightDarkMode(darkFlag);
    }else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        toggleLightDarkMode(lightFlag);
    }
}

// Check Local Storage For Theme
function checkTheme() {
    getImages();
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if(currentTheme === 'dark'){
            toggleSwitch.checked = true;
            toggleLightDarkMode(darkFlag);
        }
    } 
}

// Event Listenner
toggleSwitch.addEventListener('change', switchTheme);
// On Load
checkTheme();
