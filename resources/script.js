const openbutton = document.getElementById('openbutton');
const navbar = document.getElementById('navbar');
const mainContent = document.getElementById('cover');
const drawerSound = new Audio('./resources/sounds/drawer-open.mp3');

openbutton.addEventListener('click', () => {
    navbar.classList.toggle('visible');
    navbar.classList.toggle('hidden');

    drawerSound.currentTime = 0.1;
    drawerSound.play();

    if (navbar.classList.contains('visible')) {
        mainContent.style.transform = 'translateY(60px)'; // match navbar height
    } else {
        mainContent.style.transform = 'translateY(0)';
    }
});