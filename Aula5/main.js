const ContaBancaria = require("./ContaBancaria"); 

const conta = new ContaBancaria(100);

conta.sacar(50);
conta.depositar(200);
console.log(conta.saldo); // 250