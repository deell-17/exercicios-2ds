class Funcionario {
    static quantidades = 0
    #saldo = 0

    constructor (nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario

        Funcionario.quantidades++
    }

    set depositar(valor){
        if (valor > 0){
            this.#saldo += valor
        }
    }

    get saldo(){
        return this.#saldo
    }

    apresentar(){
        return `${this.nome} - ${this.cargo}`
    }
}
const funcionario1 = new Funcionario ("Ana","Desenvolvedora",5000)
const funcionario2 = new Funcionario("Carlos","Analista" , 4000) 

module.exports = Funcionario