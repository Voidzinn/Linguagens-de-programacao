let escola = 
{
    nome: "FACENS",
    num_matriculados: 100
}
let escola2 = 
{
    nome: "Anglo",
    num_matriculados: 30
}
let escola3 = 
{
    nome: "Dom Aguirre",
    num_matriculados: 150
}
let escola4 = 
{
    nome: "Ser",
    num_matriculados: 50
}

let escolas = [escola, escola2, escola3, escola4]

let escolasFiltradas = escolas.filter(elemento => elemento.num_matriculados >= 100)

console.log(escolasFiltradas)