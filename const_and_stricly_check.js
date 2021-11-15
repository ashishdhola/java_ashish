// CONST
const x = 10;
let y = x + 10;
console.log(y);
//Stricly check
let a = 10; //number
let b = '10';//string
console.log(a == b);
console.log(a === b);//stricly check
let c = 10; //number
let d = 10.0;//float
console.log(c == d);
console.log(c === d);//stricly check
let e = 10;//number
let f = 10.1;//float
console.log(e);
console.log(f);
console.log(e === f);//stricly check
//string
let g = '15';
let h = 12;
console.log(g + h)//1.string concate 2.addition
console.log(g * h);
console.log(g - h);
console.log(g / h);

console.log(g++);
console.log(++g);
console.log(++g);
console.log(g++);
console.log(g);

let str1 = 'Hello';
let str2 = 'world';
console.log(str1 + str2);
let i = 10.5;
console.log(str1 + i);
//NaN-->Not a Number
//null
let j = NaN;
let k = null;
let l;
console.log(j == k);
console.log(k == l);
console.log(l == j);
console.log(j === k);//stricly check
console.log(k === l);//stricly check
console.log(l === j);//stricly check
//boolean 
let m = 10;
let n = 10.0000;
let o = (m == n);
console.log(o);