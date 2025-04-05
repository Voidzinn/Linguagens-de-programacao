let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function odd_numbers(numbers_list)
{
    let odd_list = [];
    for(number of numbers_list)
    {
        if(number % 2 !== 0)
        {
            odd_list.push(number);
        }
    }
    return odd_list;
}

console.log(odd_numbers(numbers));