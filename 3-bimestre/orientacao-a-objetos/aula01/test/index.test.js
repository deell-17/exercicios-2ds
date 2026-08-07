const filme = require("../index")

test("O objeto deve possuir o título correto", () => {
    expect(filme.titulo).toBe("Interestelar")
})

test("O diretor deve ser Christopher Nolan", () => {
    expect(filme.diretor).toBe("Christopher Nolan")
})

test("O ano deve ser 2014", () => {
    expect(filme.ano).toBe(2014)
})

test("O método apresentar deve retornar corretamente", () => {
    expect(filme.apresentar()).toBe("Filme: Interestelar")
})