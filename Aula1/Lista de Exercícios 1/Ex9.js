function validateEmail(email)
{
    if(email.includes("@") &&  email.split("@").length == 2 && (email.split("@")[1]).includes("."))
    {
        return true;
    }
    return false;
}

console.log(validateEmail("joao.salazar@facens.br")); // true
console.log(validateEmail("joao.salazar@hotmail.com@gmail.com")); // false