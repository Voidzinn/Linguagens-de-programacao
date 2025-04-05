class Pessoa
{
    codigo;
    nome;
    automoveis = [];

    constructor (_codigo, _nome)
    {
        this.codigo = _codigo;
        this.nome = _nome;
    }

    get codigo()
    {
        return this.codigo;
    }

    inserirAutomovel(automovel)
    {
        this.automoveis.push(automovel);
    }

    removerAutomovelByCod(codigo)
    {
        let index = this.automoveis.findIndex(automovel => automovel.codigo === codigo);
        if(index !== -1)
        {
            this.automoveis.splice(index, 1);
        }
    }

    getAutomovel(codigo)
    {
        return this.automoveis.find(automovel => automovel.codigo === codigo);
    }

    imprimir()
    {
        console.log(`Código: ${this.codigo}\nNome: ${this.nome}`);
    }

    imprimirCompleto()
    {
        console.log(`Código: ${this.codigo}\nNome: ${this.nome}\nAutomóveis:`);
        for (let automovel of this.automoveis)
        {
            automovel.imprimir();
        }
        console.log("=======================");
    }
}

module.exports = Pessoa;