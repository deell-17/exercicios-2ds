const lista = document.getElementById("lista")
const botao = document.getElementById("adicionar")

botao.addEventListener("click", () => {

    const item = document.createElement("li")

    item.textContent = "Novo Item"

    lista.appendChild(item)

})