//DOM

const raiva=document.querySelector("#raiva")
const alegria=document.querySelector("#alegria")
const nojinho=document.querySelector("#nojinho")
const tristeza=document.querySelector("#tristeza")
const img = document.querySelector("img")
const conteiner =document.querySelector(".central")

raiva.addEventListener("click", () => {
    img.src ="imagens/01.png"
    conteiner.style.backgroundColor = 'darkred'
})

alegria.addEventListener("click",() => {
    img.src ="imagens/02.png"
 conteiner.style.backgroundColor = 'yellow'
})

nojinho.addEventListener("click", () => {
img.src ="imagens/03.png"
 conteiner.style.backgroundColor = 'darkgreen'
} )

tristeza.addEventListener("click", () => {
img.src ="imagens/04.png"
 conteiner.style.backgroundColor = 'darkblue'

})






















