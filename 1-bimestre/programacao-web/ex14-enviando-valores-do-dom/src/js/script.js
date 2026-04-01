const input = document.getElementById("nome")
const botao = document.getElementById("mostrar")
const resultado = document.getElementById("resultado")

botao.addEventListener("click", () => {
  resultado.textContent = "Olá, " + input.value
})