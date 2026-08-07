const livro = require("../index")

test("O título deve ser Dom Casmurro", () => {
    expect(livro.titulo).toBe("Dom Casmurro")
})

test("O autor deve ser Machado de Assis", () => {
    expect(livro.autor).toBe("Machado de Assis")
})

test("O método descricao deve funcionar corretamente", () => {
    expect(livro.descricao()).toBe(
        "Livro: Dom Casmurro - Machado de Assis"
    )
})