
const burgerEl = document.querySelector('.fa-bars')

const navEl = document.querySelector ('nav')

burgerEl.addEventListener('click', showNav)

function showNav(){
    console.log("Du trykket hamburgermenyen")

    navEl.classList.toggle('show')
}
