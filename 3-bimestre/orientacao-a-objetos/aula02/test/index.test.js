const funcionario = require("../index")

test("O nome deve ser João", () => {
    expect(funcionario.nome).toBe("João")
})

test("O cargo deve ser Desenvolvedor", () => {
    expect(funcionario.cargo).toBe("Desenvolvedor")
})

test("O salário deve ser 5000", () => {
    expect(funcionario.salario).toBe(5000)
})