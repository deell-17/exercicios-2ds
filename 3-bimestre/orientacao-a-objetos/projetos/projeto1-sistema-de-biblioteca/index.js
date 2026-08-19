class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.disponivel = true;
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
        }
    }

    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
        }
    }

    estaDisponivel() {
        return this.disponivel;
    }
}

module.exports = Livro;

const livro1 = new Livro(
    "O Hobbit",
    "J.R.R. Tolkien",
    1937
);

const livro2 = new Livro(
    "1984",
    "George Orwell",
    1949
);

console.log(livro1.estaDisponivel()); // true

livro1.emprestar();

console.log(livro1.estaDisponivel()); // false
console.log(livro2.estaDisponivel()); // true

livro1.devolver();

console.log(livro1.estaDisponivel()); // true

module.exports = Livro