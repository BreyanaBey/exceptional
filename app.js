let icon = document.querySelector('#hamburgerMenuIcon')
let menu = document.querySelector('#menu')


function menuDrop() {
    menu.classList.toggle('menuToggle')
}

function handleClick(e) {
    e.target.classList.toggle('fa-bars')
    e.target.classList.toggle('fa-close')
    menuDrop()
}

icon.addEventListener('click', handleClick)