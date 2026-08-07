# 🎯 Aula 2 — Classes: Constructor e `this`

## 🎯 Objetivos da Aula

- Compreender o conceito de classe em JavaScript.
- Aprender a utilizar o método `constructor`.
- Entender o funcionamento da palavra-chave `this`.
- Criar objetos utilizando classes.

# 🧩 O que é uma Classe?

Na aula anterior vimos que criar vários objetos iguais gera repetição de código.

Para resolver esse problema utilizamos uma **classe**.

Uma classe funciona como um **molde** para criar vários objetos com a mesma estrutura.

## 📌 Exemplo 1 — Criando uma classe

```jsx
class Aluno {

}
```

Neste momento apenas criamos o modelo.

Nenhum objeto foi criado ainda.

# 🏗️ O método `constructor`

O `constructor` é um método especial executado automaticamente quando criamos um novo objeto da classe.

É nele que inicializamos os atributos do objeto.

## 📌 Exemplo 2 — Constructor

```jsx
class Aluno {

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

}
```

Agora toda vez que um objeto for criado, será necessário informar um nome e uma idade.

# 🧠 O que significa `this`?

A palavra-chave `this` representa o próprio objeto que está sendo criado.

Observe:

```jsx
class Pessoa {

    constructor(nome) {
        this.nome = nome
    }

}
```

Quando executamos:

```jsx
const pessoa = new Pessoa("Maria")
```

O JavaScript faz algo semelhante a:

```
objeto.nome = "Maria"
```

Ou seja, `this.nome` pertence ao objeto criado.

# 📌 Exemplo 3 — Criando instâncias

```jsx
class Produto {

    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

}

const produto1 = new Produto("Mouse", 80)
const produto2 = new Produto("Teclado", 150)
```

Cada objeto possui seus próprios valores.

# 📌 Exemplo 4 — Outra classe

```jsx
class Livro {

    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

}

const livro = new Livro(
    "Dom Casmurro",
    "Machado de Assis",
    256
)

console.log(livro)
```

# ⚠️ Erros comuns

### ❌ Esquecer o `new`

```jsx
const aluno = Aluno("João", 17)
```

Correto:

```jsx
const aluno = new Aluno("João", 17)
```

### ❌ Não utilizar `this`

```jsx
constructor(nome) {
    nome = nome
}
```

Correto:

```jsx
constructor(nome) {
    this.nome = nome
}
```

### ❌ Achar que a classe já cria objetos

Uma classe apenas define o modelo.

Os objetos só existem quando utilizamos `new`.

Fim da aula!

_

# 🧩 Exercício Rápido

### 💬 Criando uma classe

Crie uma classe chamada `Funcionario`.

Ela deverá possuir um `constructor` que receba:

- nome
- cargo
- salario

Depois, crie uma instância com os seguintes dados:

```
Nome: João
Cargo: Desenvolvedor
Salário: 5000
```

Exporte essa instância.