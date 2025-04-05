class Automovel
{
    codigo;
    marca;
    modelo;
    
    constructor (_codigo, _marca, _modelo)
    {
        this.codigo = _codigo;
        this.marca = _marca;
        this.modelo = _modelo;
    }

    get codigo()
    {
        return this.codigo;
    }

    imprimir()
    {
        console.log(`\tCódigo: ${this.codigo}, Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

module.exports = Automovel;