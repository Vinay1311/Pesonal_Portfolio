// Humburger
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Socail Media Profiles
function openGithubProfile() {
    window.open('https://github.com/Vinay1311', '_blank');
}

function openLinkedInProfile() {
    window.open('http://www.linkedin.com/in/vinay-kumar-soni', '_blank');
}

// Dark Theme

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const img = document.querySelector('.pic-section');

    darkModeToggle.addEventListener('click', function () {
        // Toggle the dark mode class on the body
        body.classList.toggle('dark-mode');
        darkModeToggle.style.transform = body.classList.contains('dark-mode') ? 'rotate(180deg)' : 'rotate(0deg)';
        darkModeToggle.style.backgroundImage = body.classList.contains('dark-mode') ? 'url("./Assets/Day-mode.png")' : 'url("./Assets/Night-mode.png")';
        darkModeToggle.style.backgroundColor= body.classList.contains('dark-mode') ? 'white' : 'transparent';
        
        img.classList.toggle('move-right');
    });
});

