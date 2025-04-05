function invertString(raw_string)
{
    let treated_string = "";
    for(let i = raw_string.length - 1; i >= 0; i--)
    {
        treated_string += raw_string.charAt(i);
    }
    return treated_string;
}

let input_string = "Teste";

console.log(`String original: ${input_string}\nString invertida: ${invertString(input_string)}`);
