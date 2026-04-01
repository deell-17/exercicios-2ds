const form = document.getElementById("formulario")
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const resultado = document.getElementById("resultado")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const nomeValor = nome.value
  const idadeValor = idade.value

  resultado.textContent = `Olá ${nomeValor}, você tem ${idadeValor} anos`
})