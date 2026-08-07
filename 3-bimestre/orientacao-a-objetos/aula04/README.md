# 🎯 Aula 4 — Classes: Actions (Métodos)

## 🎯 Objetivos da Aula

- Aprender a criar métodos em uma classe.
- Entender como os métodos representam ações dos objetos.
- Utilizar `this` para acessar atributos dentro dos métodos.
- Criar classes com comportamentos.

# 🧩 O que são Actions?

Além de armazenar informações, um objeto também pode executar ações.

Essas ações são chamadas de **métodos**.

Nesta disciplina utilizaremos o termo **Actions**, pois representam as ações que um objeto é capaz de realizar.

# 📌 Exemplo 1 — Criando uma Action

```jsx
class Pessoa {

    constructor(nome) {
        this.nome = nome
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}`
    }

}

const pessoa = new Pessoa("João")

console.log(pessoa.apresentar())
```

A função `apresentar()` é uma Action da classe.

# 📌 Exemplo 2 — Classe Carro

```jsx
class Carro {

    constructor(modelo) {
        this.modelo = modelo
    }

    ligar() {
        return `${this.modelo} ligado`
    }

}

const carro = new Carro("Corolla")

console.log(carro.ligar())
```

# 🧠 Utilizando `this` dentro dos métodos

Os métodos podem acessar qualquer atributo da própria instância utilizando `this`.

```jsx
class Produto {

    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    descricao() {
        return `${this.nome} custa R$ ${this.preco}`
    }

}

const produto = new Produto("Mouse", 80)

console.log(produto.descricao())
```

# 📌 Exemplo 3 — Classe Conta

```jsx
class Conta {

    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    consultarSaldo() {
        return this.saldo
    }

}

const conta = new Conta("Maria", 2500)

console.log(conta.consultarSaldo())
```

# ⚠️ Erros comuns

### ❌ Esquecer os parênteses ao declarar um método

Errado:

```jsx
apresentar {
}
```

Correto:

```jsx
apresentar() {

}
```

### ❌ Não utilizar `this`

Errado:

```jsx
apresentar() {
    return nome
}
```

Correto:

```jsx
apresentar() {
    return this.nome
}
```

### ❌ Chamar um método sem os parênteses

Errado:

```jsx
console.log(pessoa.apresentar)
```

Correto:

```jsx
console.log(pessoa.apresentar())
```

Fim da aula!

_

# 🧩 Exercício Rápido

### 💬 Criando uma Action

Crie uma classe chamada `Livro`.

Ela deverá possuir:

Atributos:

- titulo
- autor

Método:

```jsx
descricao()
```

O método deverá retornar:

```
Livro: <titulo> - <autor>
```

Depois crie uma instância com:

```
Título: Dom Casmurro
Autor: Machado de Assis
```

Exporte essa instância.