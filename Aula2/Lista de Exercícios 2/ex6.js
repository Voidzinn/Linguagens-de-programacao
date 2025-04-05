let aluno = {
    nome: "João",
    idade: 19,
    curso: "ADS",
    matricula: "236937",
    mostrarInformacoes: function()
    {
        return `${this.nome}\n${this.idade}\n${this.curso}\n${this.matricula}`
    }
};

console.log(aluno.mostrarInformacoes())