const Pessoa = require('./Pessoa.js')
const Automovel = require('./Automovel.js')

class Main
{
    pessoas = [];

    addPessoa(pessoa)
    {
        this.pessoas.push(pessoa);
    }

    addAutomovelPessoa(codPessoa, codAuto, marca, modelo) 
    {
        let pessoa = this.pessoas.find(pessoa => pessoa.codigo === codPessoa);

        let automovel = new Automovel(codAuto, marca, modelo);

        pessoa.inserirAutomovel(automovel);
    }

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel)
    {
        let pessoaOriginal = this.pessoas.find(pessoa => pessoa.codigo === codPessoaOrigem);
        let pessoaDestino = this.pessoas.find(pessoa => pessoa.codigo === codPessoaDestino);

        let automovel = pessoaOriginal.getAutomovel(codAutomovel);

        pessoaOriginal.removerAutomovelByCod(codAutomovel);

        pessoaDestino.inserirAutomovel(automovel);
    }

    mostrarTodasAsPessoas()
    {
        for(let pessoa of this.pessoas)
        {
            pessoa.imprimirCompleto();
        }
    }
}

const main = new Main();
main.addPessoa(new Pessoa(1, "João"));
main.addAutomovelPessoa(1, 1, "Fiat", "Uno");
main.addAutomovelPessoa(1, 2, "Volkswagen", "Fusca");
main.mostrarTodasAsPessoas();
main.addPessoa(new Pessoa(2, "Maria"));
main.transfereAutomovel(1, 2, 1);
main.mostrarTodasAsPessoas();