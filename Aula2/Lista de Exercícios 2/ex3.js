let numbers = [10, 20, 30, 40, 50];

function sum(numbers_list)
{
    let return_sum = 0;
    for(let number of numbers_list)
    {
        return_sum += number;
    }
    return return_sum;
}

console.log(sum(numbers));