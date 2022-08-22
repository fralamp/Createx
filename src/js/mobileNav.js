const burger = document.getElementById('sidebarToggle')
const sideBar = document.getElementById('mobile-nav')
const body = document.body

burger.addEventListener('click', even => {
    document.body.classList.toggle('show-nav')
    if (body.classList.contains('show-nav')){
        closeNav()
    } else {
        showNav()
    }
})

function showNav() {
    burger.classList.add('snow-nav')
    sideBar.classList.remove('open')
    // body.classList.remove('no-scroll')
}

function closeNav() {
    burger.classList.remove('show-nav')
    sideBar.classList.add('open')
    // body.classList.add('no-scroll')
}

