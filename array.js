let arr=[];
let email = (a) =>
{
    arr.push(a.substring(0, a.lastIndexOf(':')));
    arr.push(a.substring(a.lastIndexOf(':') + 2, a.lastIndexOf('@')));
    arr.push(a.substring(a.lastIndexOf('@') + 1, a.lastIndexOf('.')));
    arr.push(a.slice(a.lastIndexOf('.') + 1, -1));
}
email(`EmailAddress:"Isla_Quinn2628@qater.org"`);
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.length);
let b= [];
console.log(b.pop());
let myarray = "raj, ashish, umang, nirav";
console.log(myarray);
let splitarray = myarray.split(",");
 console.log(splitarray); let newarray = arr.join('**');
// let newarray = arr.toString();
console.log(newarray);
console.log(arr.unshift('skill','qode'));
console.log(arr.unshift('qode'));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.slice(-3));
console.log(arr.indexOf("skill", "qater"));
console.log(arr.splice(1, 3));
// console.log(arr.match())
// concat
// let e = ['a', 'b', 'c'];
// let f = ['d', 'e', 'f'];
// let g = e.concat(f);
// console.log(g);
// fill
// let e = [1,2,3,4,5,6]
// console.log(e.fill(6,1,6));
// filter
// let e = ['nirav', 'ashish', 'nirbhay', 'umang', 'dhruv']
// let f = e.filter(e => e.length > 5);
// console.log(f);
// map
// let x, map1 = [2, 6, 8, 9];
// console.log(map1.map(x => (x * 2)));
