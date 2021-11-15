function sum(a, b, c)
{
    console.log(a + b + c);
}
sum(15, 25, 7);
//functional hoisting 
sum2(14, 24, 6);
function sum2(a, b, c)
{
    add = a + b + c;
    console.log(add);
}
// arow functional
let mulliply = (a, b, c) =>
{
    return a * b * c;
}
console.log(mulliply(2, 7, 9));


let devied = (a, b) => a / b;
console.log(devied(15, 5))

let odd_even = () =>
{
    let a = prompt("Enter Number:-");
    console.log(a);
    if (a % 2 == 0)
    {
        console.log("Number is even");
    }
    else
    {
        console.log("Number is odd")
    } 
}
odd_even();