let produto = {
    nome: "banana",
    preco: 80,
    quantidade: 2
};

function calcularTotal(produto_obj)
{
    return produto_obj["preco"] * produto_obj["quantidade"];
}

console.log(calcularTotal(produto));