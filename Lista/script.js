const inputTask = document.querySelector('.input-task')
const buttonAdd = document.querySelector('.button-add')
const listaCompleta = document.querySelector('.list-task')

let list = []

function monstrarTarefa() {

    let newList = ''

    list.forEach((item, posicao) => {
        newList = newList + `
        <li class="task">
            <img src="/img/checked.png" alt="check-na-tafera" onclick ="checkItem(${posicao})">
            <p>${item}</p>
            <img src="/img/trash.png" alt="excluir-tarefa" onclick ="deletItem()">
        </li>
        `
    })

    listaCompleta.innerHTML = newList

    localStorage.setItem('lista', JSON.stringify(list))
}
reload()
buttonAdd.addEventListener('click', () => {
    if (inputTask.value.trim() === "") {
        alert("O campo de entrada está vazio. Por favor, digite algo.")}else{
            list.push(inputTask.value.trim()), monstrarTarefa()
        }

    inputTask.value = ""
})

function reload() {
    const tarefasLocalStorege = localStorage.getItem('lista')

    if(tarefasLocalStorege){
        list = JSON.parse(tarefasLocalStorege)
    }

    monstrarTarefa()
}

function checkItem(posicao) {
    const item = document.querySelectorAll('p')[posicao]; item.classList.toggle('line');
}

function deletItem(posicao){
    list.splice(posicao, 1)

    monstrarTarefa()
}