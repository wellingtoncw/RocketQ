export default function Modal(){

    // armazena a classe modalWrapper
    const modalWrapper = document.querySelector(".modal-wrapper")

    // pega todos os botões que contenham a classe cancel
    const cancelButton = document.querySelector('.button.cancel');

    // ao ouvir o clik, executa a função close
    cancelButton.addEventListener('click', close) 

    function open(){
        //funcionalidade de atribuir a classe active a modal
        modalWrapper.classList.add("active");
    }
    function close(){
        //funcionalidade de remover a classe active a modal
        modalWrapper.classList.remove("active");
    }

    return {
        open,
        close
    }
}