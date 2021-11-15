// let arr = [];
// let get = (a) =>
// {
//     let b = a.length;
//     console.log("string length=>" + b);
//     for (let i = 0; i < b; i++)
//     {
//         arr.push(a[i]);
//     }
//     console.log(arr);
//         console.log(arr.fill( '*', b - 8,b-2));
// }
// get('+919825935658');
// let arr=[];
// let find = (e) =>
// {
//     let l = e.length;
//     console.log("string length=>" + l);
//     for (let i = 0; i < l; i++)
//     {
//         arr.push(e[i]);
//     }
//     console.log(arr);
//     console.log(arr.fill('*',2,arr.indexOf('@')-2))
// } 
// find('ashishdhola35@gmail.com');
// // let a = [8];
// for (let i = 1; i <=10; i++)
// {
//     console.log("8  "+i+"  "+a*i);
// }



// ************************************************************************

let arr = [`INDIA`, `1350000000`]
let arr1 = [`LONDON`,`200000000`] 
let arr2 = [`USA`,`50000000`] 
let arr3 = [`JAPAN`,`2005699201`] 

console.log(arr.join(`-`), "  " + arr1.join(`-`), "  " + arr2.join(`-`), "  " + arr3.join(`-`))

let percentageOfWorld1 = a =>
{
    let P = 4500000000;
    let p=[]
    let n = a.length;
    console.log(n);
    for (let i = 0;i<n ;i++)
    {
        p.push(a[i]);
    }
    console.log(p)
    console.log(p.shift(),p/P*100,"%")
    
}
percentageOfWorld1(arr3)


