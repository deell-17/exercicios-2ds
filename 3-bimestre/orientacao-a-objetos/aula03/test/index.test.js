const animais = require("../index")

test("Deve existir duas instâncias", () => {
    expect(animais.length).toBe(2)
})

test("Primeiro animal deve ser Rex", () => {
    expect(animais[0].nome).toBe("Rex")
})

test("Segundo animal deve ser Mimi", () => {
    expect(animais[1].nome).toBe("Mimi")
})

test("As instâncias devem ser independentes", () => {
    animais[0].nome = "Thor"

    expect(animais[0].nome).toBe("Thor")
    expect(animais[1].nome).toBe("Mimi")
})