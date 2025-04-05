function acharMaiorNumero(numbers_list)
{
    let biggest_num = numbers_list[0];
    for(number of numbers_list)
    {
        if (biggest_num < number)
        {
            biggest_num = number;
        }
    }
    return biggest_num;
}

let numbers = [10, 20, 30, 40, 50];


console.log(acharMaiorNumero(numbers));