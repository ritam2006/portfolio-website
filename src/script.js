const carousel = document.getElementById('carousel')
const cover_images = [...carousel.children].splice(0, 8)
let cover_image_index = 0

class Droplet {
    constructor(window_width) {
        
    }
}

function move_slide(move_by) {
    let new_index = cover_image_index + move_by
    if (new_index >= 0 && new_index <= cover_images.length - 1) {
        cover_images[cover_image_index].style.display = 'none'
        cover_images[new_index].style.display = 'block'
        cover_image_index = new_index
    }
}

move_slide(0)