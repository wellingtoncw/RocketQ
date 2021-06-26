import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")
//Pegar quando o marcar como lido for clicado
checkButtons.forEach(button => {
    //adicionar escutar
    button.addEventListener("click", handleClick)
})

//Quando o botão delete for clicado, ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault() // para a tag a não se comportar como link
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`) //url pra onde o formulário vai

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Ter certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}