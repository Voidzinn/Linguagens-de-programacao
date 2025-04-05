function countVowels(raw_string)
{
    let counter = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < raw_string.length; i++)
    {
        if(vowels.includes(raw_string.charAt(i)))
        {
            counter++;
        }
    }
    return counter;
}

console.log(countVowels("teste"));