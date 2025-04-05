let endereco = {
    rua: "Rua Olegário Ribeiro",
    numero: 906,
    bairro: "Vila Fiori",
    cidade: "Sorocaba"
};

for(info in endereco)
{
    console.log(`${info}: ${endereco[info]}`);
}
