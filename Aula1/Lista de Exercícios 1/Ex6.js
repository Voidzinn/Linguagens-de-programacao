function showDouble(number)
{
    if(number <= 0)
    {
        console.log("Só aceito números positivos maiores que zero");
        return false;
    }
    console.log(`Número: ${number}\nDobro: ${number * 2}`);
}

showDouble(20);