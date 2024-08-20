 //DOM

 const lampada = document.querySelector('#lamp')
 const btligar = document.querySelector('#ligar')
 const btdesligar = document.querySelector('#desligar')

 //EVENTO

 btligar.addEventListener('click',acender)
 btdesligar.addEventListener('click',apagar)
 lampada.addEventListener('dblclick',quabrada)
 //funções

 function acender(){
    lampada.src='imagens/acesa.gif'
 }

 function apagar(){
    lampada.src='imagens/apagada.gif'
 }

 function quabrada(){
    lampada.src='imagens/quebrada (1).jpg'
 }