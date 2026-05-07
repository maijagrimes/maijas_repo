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

//Get all image container
let childElement = document.querySelectorAll(".image-container");

//Array of image URLs
let imageUrls = ["./resources/images/meandkathryn.png", "./resources/images/boulderhiking.png", "./resources/images/poncho.png", "./resources/images/football.png", "./resources/images/jinx.png"];

//Initial z-index value
let zIndex = 1;

//Iterate through each image container
childElement.forEach((element, index) => {
    //Create an image element
    let img = document.createElement("img");
    img.setAttribute("src", imageUrls[index]);
    img.setAttribute("class", "image");
    element.appendChild(img);

    //Add a click event listener to each image container
    element.addEventListener("click", () => {
    zIndex++;
    //element.style.right = "45em";
    element.style.zIndex = zIndex.toString();
    element.style.transform = "rotate(0deg)";

    //Apply transition to right property
    //element.style.transition = " right 0.2s ease";

    //Remomve the class and reset properties after a delay
    //setTimeout(() => {
        zIndex -= 3;
        element.style.right = "";
        element.style.zIndex = zIndex.toString();
        element.style.transform = "";

      //Set a transition for clearing the transition property
        //element.style.transition = "all 0.3s ease";

      //Clear the transition property after a slight delay
        //setTimeout(() => {
        //element.style.transition = "";
        //, 300);
    //}, 1000);
    });
});