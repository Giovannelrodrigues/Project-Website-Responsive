const hamburguer = document.querySelector('.hamburguer')
const adise = document.querySelector('.aside')


hamburguer.addEventListener('click' ,() => {
    hamburguer.classList.toggle('show-menu')
    adise.classList.toggle('show-menu')
})