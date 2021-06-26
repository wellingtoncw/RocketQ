import  Modal  from './modal.js'

const modal = Modal()

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")
//Pegar quando o marcar como lido for clicado
checkButtons.forEach(button => {
    //adicionar escutar
    button.addEventListener("click", event => {
        //Abrir modal
        modal.open()
    })
})