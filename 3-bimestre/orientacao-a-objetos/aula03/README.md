# 🎯 Aula 3 — Classes: Instâncias

## 🎯 Objetivos da Aula

- Compreender o conceito de instância em Programação Orientada a Objetos.
- Aprender a criar múltiplas instâncias de uma mesma classe.
- Entender que cada instância possui seus próprios atributos.
- Diferenciar classe de objeto (instância).

# 🧩 O que é uma Instância?

Na aula anterior aprendemos que uma **classe** é um modelo.

Quando utilizamos a palavra-chave `new`, criamos um objeto a partir desse modelo.

Esse objeto recebe o nome de **instância**.

Em outras palavras:

> Uma instância é um objeto criado a partir de uma classe.
> 

# 📌 Exemplo 1 — Criando uma instância

```jsx
class Aluno {

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

}

const aluno = new Aluno("João", 17)
```

Neste exemplo:

- `Aluno` é a classe.
- `aluno` é uma instância da classe `Aluno`.

# 📌 Exemplo 2 — Criando várias instâncias

Uma mesma classe pode criar quantos objetos forem necessários.

```jsx
class Aluno {

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

}

const aluno1 = new Aluno("Ana", 16)
const aluno2 = new Aluno("Carlos", 17)
const aluno3 = new Aluno("Maria", 18)
```

Todos foram criados a partir da mesma classe, mas cada um possui seus próprios valores.

# 🧠 Cada instância é independente

Alterar uma instância não modifica as demais.

```jsx
class Produto {

    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

}

const produto1 = new Produto("Mouse", 80)
const produto2 = new Produto("Teclado", 150)

produto1.preco = 100

console.log(produto1.preco)
console.log(produto2.preco)
```

Saída:

```
100
150
```

Cada objeto possui seus próprios dados.

# 📌 Exemplo 3 — Outra classe

```jsx
class Filme {

    constructor(titulo, ano) {
        this.titulo = titulo
        this.ano = ano
    }

}

const filme1 = new Filme("Avatar", 2009)
const filme2 = new Filme("Interestelar", 2014)

console.log(filme1)
console.log(filme2)
```

Mesmo utilizando a mesma classe, cada instância representa um filme diferente.

# ⚠️ Erros comuns

### ❌ Confundir classe com instância

```jsx
class Pessoa {

}
```

Aqui ainda não existe nenhum objeto.

### ❌ Esquecer de utilizar `new`

```jsx
const pessoa = Pessoa("João")
```

Correto:

```jsx
const pessoa = new Pessoa("João")
```

### ❌ Achar que todas as instâncias compartilham os mesmos valores

Não compartilham.

Cada objeto possui seus próprios atributos.

Fim da aula!

_

# 🧩 Exercício Rápido

### 💬 Criando duas instâncias

Crie uma classe chamada `Animal`.

Ela deverá receber:

- nome
- especie

Depois crie duas instâncias:

Primeira:

```
Nome: Rex
Espécie: Cachorro
```

Segunda:

```
Nome: Mimi
Espécie: Gato
```

Exporte um array contendo as duas instâncias.