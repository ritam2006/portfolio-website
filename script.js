const line = document.getElementById('line');

const sections = document.querySelectorAll('.section');

const rain_container = document.getElementById('rain-container');

const carousel = document.getElementById('carousel');
const cover_images = [...carousel.children];
let cover_image_index = 0;
const move_left = document.getElementById('move-left');
const move_right = document.getElementById('move-right');
const cover_index_display = document.getElementById('cover-index-display');

const menu = document.getElementById('menu');
const menu_btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');

const rainWords = ["python", "javascript", "react", "chess", "poke", 
    "hiphop", "pikachu", "fashion", "java", "khabib#1"];

function moveSlide(move_by) {
    let new_index = cover_image_index + move_by;
    new_index === -1 ? new_index = cover_images.length - 1 : null;
    new_index === cover_images.length ? new_index = 0 : null;

    if (new_index >= 0 && new_index <= cover_images.length - 1) {
        cover_images[cover_image_index].style.display = 'none';
        cover_images[new_index].style.display = 'block';
        cover_image_index = new_index;
    }

    cover_index_display.innerHTML = cover_image_index + 1 + '/' + cover_images.length;
}

function toggleMenu() { 
    menu.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    menu_btn.classList.toggle('fa-bars');
    menu_btn.classList.toggle('fa-xmark');
    document.body.classList.toggle('overflow-hidden');
}

function rain() {
    const amount = 35;
    let i = 0;

    while (i < amount) {
        let drop = document.createElement('div');
        drop.classList.add('rain');

        let posX =  (1 - i / amount) * 100;
        let delay = Math.random() * -20;

        drop.style.left = posX + 'vw';

        drop.innerText = rainWords[Math.floor(Math.random() * rainWords.length)];

        drop.style.animationDelay = delay + 's';

        rain_container.appendChild(drop);
        i++;
    }
}

function goldRain() {
    document.documentElement.style.setProperty("--primary-color", "#FDB515");
    document.documentElement.style.setProperty("--secondary-color", "#010133");
    document.documentElement.style.setProperty("--highlight", "#FDB515");
}

function purpleRain() {
    document.documentElement.style.setProperty("--primary-color", "#9614d0");
    document.documentElement.style.setProperty("--secondary-color", "#11001c");
    document.documentElement.style.setProperty("--highlight", "#ff10f0");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        
        else {
            entry.target.classList.remove('show');
        }
    });
})

rain();
sections.forEach((section) => observer.observe(section));
moveSlide(0);