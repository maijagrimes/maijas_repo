/*const openbutton = document.getElementById('openbutton');
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
});*/

document.addEventListener("DOMContentLoaded", () => {

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    console.log(page1, page2);

    page2.addEventListener('click', () => {
        page2.style.zIndex = "8";
        page1.style.zIndex = "1";

        page2.classList.add("active");
        page1.classList.remove("active");
    });

    page1.addEventListener('click', () => {
        page1.style.zIndex = "5";
        page2.style.zIndex = "1";

        page1.classList.add("active");
        page2.classList.remove("active");
    });

});