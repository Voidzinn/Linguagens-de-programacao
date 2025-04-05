let aluno1 = 
{
    nome: "João",
    idade: 19,
    curso: "ADS",
    matricula: "030106"
}

let aluno2 = 
{
    nome: "Sara",
    idade: 19,
    curso: "Engenharia da Computação",
    matricula: "180105"
}

let aluno3 = 
{
    nome: "Henrique",
    idade: 19,
    curso: "ADS",
    matricula: "161205"
}

let aluno4 = 
{
    nome: "Mikka",
    idade: 20,
    curso: "Arquitetura e Urbanismo",
    matricula: "291105"
}

let aluno5 = 
{
    nome: "Café",
    idade: 17,
    curso: "Ciencias Biologicas",
    matricula: "220307"
}


let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];


function alunosMaior(alunos_list)
{
    let maiores_list = [];  
    
    for(let aluno of alunos_list)
    {
        if(aluno.idade >= 18)
        {
            maiores_list.push(aluno.nome);
        }
    }
    return maiores_list;
}

console.log(alunosMaior(alunos));