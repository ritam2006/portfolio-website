const line = document.getElementById('line')

const sections = document.querySelectorAll('.section')

const rain_container = document.getElementById('rain-container')

const carousel = document.getElementById('carousel')
const cover_images = [...carousel.children]
let cover_image_index = 0
const move_left = document.getElementById('move-left')
const move_right = document.getElementById('move-right')
const cover_index_display = document.getElementById('cover-index-display')

const something_text =  document.getElementById('something')
const better_text =  document.getElementById('better')
const name_text =  document.getElementById('full-name')

const rain_audio = new Audio('../lib/aud/rain.mp3')
const bg_music = new Audio('../lib/aud/bg-music.mp3')
bg_music.loop = true

function move_slide(move_by) {
    let new_index = cover_image_index + move_by
    new_index === -1 ? new_index = cover_images.length - 1 : null
    new_index === cover_images.length ? new_index = 0 : null

    if (new_index >= 0 && new_index <= cover_images.length - 1) {
        cover_images[cover_image_index].style.display = 'none'
        cover_images[new_index].style.display = 'block'
        cover_image_index = new_index
    }

    cover_index_display.innerHTML = cover_image_index + 1 + '/' + cover_images.length
}

function rain() {
    const amount = 300
    let i = 0

    while (i < amount) {
        let drop = document.createElement('div')
        drop.classList.add('rain')

        let width = Math.random() * 5
        let posX = Math.floor(Math.random() * window.innerWidth)
        let delay = Math.random() * -20
        let duration = Math.random * 5

        drop.style.width = width + 'px'
        drop.style.left = posX + 'px'

        drop.style.animationDelay = delay + 's'
        drop.style.animationDuration = 1 + duration + 's'

        rain_container.appendChild(drop)
        i++
    }
}

function initial_animation() {
    setTimeout(() => {
        something_text.style.display = 'none'
        rain()
        rain_audio.play()
    }, 2000)

    setTimeout(() => {
        better_text.style.display = 'block'
    }, 6000)

    setTimeout(() => {
        bg_music.play()
        better_text.style.display = 'none'
        name_text.style.display = 'block'
        sections.forEach((section) => section.style.display = 'block')
        line.style.display = 'block'
    }, 8000)
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        let title = entry.target.querySelector('.section-title')

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            title.classList.add('glitch')
        } 
        
        else {
            entry.target.classList.remove('show')
            title.classList.remove('glitch')
        }
    })
})

// Testing
/*window.onload = () => {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        initial_animation()
        localStorage.setItem("hasCodeRunBefore", true);
    }

    else {
        rain()
        something_text.style.display = 'none'
        name_text.style.display = 'block'

        projects.style.display = 'block'
        about_me.style.display = 'block'
    }
}*/
initial_animation()
// sections.forEach((section) => section.style.display = 'block')
// rain()

sections.forEach((section) => observer.observe(section))
move_slide(0)