function openNav() {
    console.log('running openNav');
    document.querySelector(".bm-overlay").style.opacity = 1;
}

document.querySelector('#react-burger-menu-btn').addEventListener('click', openNav)

function closeNav() {
    document.querySelector(".bm-overlay").style.opacity = 0;
}