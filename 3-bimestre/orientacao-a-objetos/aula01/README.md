# 🎯 Aula 1 — Revisão de Objetos no JavaScript e Introdução ao POO

## 🎯 Objetivos da Aula

- Revisar a criação de objetos em JavaScript.
- Identificar propriedades e métodos de um objeto.
- Entender o conceito de Programação Orientada a Objetos (POO).
- Compreender a diferença entre objeto, classe e instância.

# 🧩 O que é um Objeto?

Em JavaScript, um **objeto** é uma estrutura que agrupa informações e comportamentos relacionados.

Essas informações são chamadas de **propriedades** e os comportamentos são chamados de **métodos**.

## 📌 Exemplo 1 — Criando um objeto

```jsx
const aluno = {
    nome: "João",
    idade: 17,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno.nome)
console.log(aluno.idade)
```

Neste exemplo:

- `nome`, `idade` e `curso` são propriedades.
- O objeto representa um aluno.

## 📌 Exemplo 2 — Adicionando métodos

Além de armazenar informações, um objeto também pode executar ações.

```jsx
const cachorro = {
    nome: "Rex",

    latir() {
        return "Au Au!"
    }
}

console.log(cachorro.latir())
```

Agora o objeto possui um método chamado `latir()`.

# 🧠 Objetos representam coisas do mundo real

Na Programação Orientada a Objetos, procuramos representar elementos do cotidiano.

Por exemplo:

## 🚗 Carro

Propriedades

- marca
- modelo
- cor
- velocidade

Métodos

- acelerar()
- frear()
- ligar()

## 👤 Pessoa

Propriedades

- nome
- idade
- altura

Métodos

- falar()
- andar()
- dormir()

## 📚 Livro

Propriedades

- título
- autor
- páginas

Métodos

- abrir()
- fechar()

# 🤔 O problema dos Objetos Literais

Imagine um sistema escolar com centenas de alunos.

Poderíamos fazer assim:

```jsx
const aluno1 = {
    nome: "Ana",
    idade: 17
}

const aluno2 = {
    nome: "Carlos",
    idade: 18
}

const aluno3 = {
    nome: "Maria",
    idade: 16
}
```

Funciona.

Mas e se fossem:

- 100 alunos?
- 1.000 alunos?
- 50.000 alunos?

Estaríamos repetindo praticamente o mesmo código diversas vezes.

É justamente esse problema que a Programação Orientada a Objetos procura resolver.

# 💡 O que é Programação Orientada a Objetos?

A Programação Orientada a Objetos (POO) é um **paradigma** de programação baseado na criação de objetos que representam elementos do mundo real.

Na POO, normalmente criamos um **modelo** e depois geramos vários objetos a partir dele.

Esse modelo recebe o nome de **Classe**, assunto que veremos na próxima aula.

# 📖 Conceitos importantes

| Conceito | Significado |
| --- | --- |
| Objeto | Representa algo do mundo real. |
| Propriedade | Informação armazenada no objeto. |
| Método | Ação que o objeto pode realizar. |
| Classe | Modelo utilizado para criar objetos (veremos na próxima aula). |
| Instância | Um objeto criado a partir de uma classe. |

# ⚠️ Erros comuns

### ❌ Confundir propriedades com métodos

```jsx
const carro = {
    marca: "Toyota",
    ligar() {
        return "Ligado"
    }
}
```

`marca` é uma propriedade.

`ligar()` é um método.

### ❌ Achar que todo objeto possui métodos

Não.

Um objeto pode possuir apenas propriedades.

```jsx
const produto = {
    nome: "Notebook",
    preco: 3500
}
```

Esse objeto não possui nenhum método.

Fim da aula!

_

# 🧩 Exercício Rápido

### 💬 Criando um objeto

Crie um arquivo chamado `index.js`. Após isso, Crie um objeto chamado `filme`.

Ele deverá possuir as seguintes propriedades:

- titulo, com valor Interestelar
- diretor, com valor Christopher Nolan
- ano, com valor 2014

E um método chamado `apresentar()` que deverá retornar:

```
Filme: <titulo>
```

No final, exporte o objeto com `module.exports = filme`.