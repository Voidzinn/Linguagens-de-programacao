function lengthOf(raw_string)
{
    let idx = 0;
    while(typeof raw_string[idx] === "string")
    {
        idx++;
    }
    return idx++;
}


let text = "Disciplina de Programação Web";

console.log(text.length); // função padrão
console.log(lengthOf(text)); // função criada
