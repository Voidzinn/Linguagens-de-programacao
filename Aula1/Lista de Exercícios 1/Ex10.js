function isPalindrome(raw_string)
{   
    raw_string = raw_string.toUpperCase().replaceAll(" ","")
    let count = 0;
    let length = raw_string.length -1;
    for(let i = 0; i < length / 2; i++)
    {
        if(raw_string[i] == raw_string[length - i])
        {
            count++;
        }
    }
    return count == (length/2).toFixed();
}

console.log(isPalindrome("socorram me subi no onibus em Marrocos"));
console.log(isPalindrome("arara"));
console.log(isPalindrome("Facens"));

