class ContaBancaria
{
    #saldoInicial;
    
    constructor(saldoInicial)
    {
        this.#saldoInicial = saldoInicial;
    }

    get saldo()
    {
        return this.#saldoInicial;
    }

    depositar(valor)
    {
        this.#saldoInicial += valor;
    }

    sacar(valor)
    {
        if(valor > this.#saldoInicial)
        {
            console.log("Saldo insuficiente");
            return;
        }
        this.#saldoInicial -= valor;
    }
}

module.exports = ContaBancaria;