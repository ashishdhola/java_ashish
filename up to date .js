//18/10

// const x=10;
// let y=x+10;
// console.log(y);

//string check
// let a=10;
// let b='10';
// document.write(a===b)

// let a=10;
// let b='10';
// console.log(a===b)

// let a=10;
// let b=20;
// document.write(a==b)
// document.write(a)
// document.write(b)


//string

// let x='5';
// let y=5;

// document.write(x+y +"<br>");
// document.write(x-y +"<br>");
// document.write(x*y +"<br>");
// document.write(x/y +"<br>");
// document.write("<br>");
// document.write(x++ +"<br>");
// document.write(++x +"<br>");
// document.write(x +"<br>");

// let a=NaN;
// let b=null;
// let c;
// document.write(a==b)//nan----null
// document.write("<br>");
// document.write(b==c)//null----undefined
// document.write("<br>");
// document.write(a==c)//nan------undefined
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

//  document.write(a===b)
// document.write("<br>");

//  document.write(b===c)
// document.write("<br>");

//  document.write(a===c)
// document.write("<br>");

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//-------------prompt===user get value------------
// let p=prompt("Emter password=")

// let cp=prompt("Emter conform passsword")

// // document.write(p);
// // document.write(cp);
// if(p==cp)
// {
//     document.write("Your Password is Corect")
// }
// else{
//     document.write("Password IS incorect")
// }

//20/10/21


//function hoisting
// let sum=(a,b)=>
// {
//     add=a*b;
//     document.write(add)
// }
// sum(59,4);
// 
// let sum=(a)=>
// {
//     add=a*a;
//     document.write(add)
// }
// sum(9);

// //2nd of 1st
// sum(59,4);
// function sum(a,b)
// {
//     add=a*b;
//     document.write(add)
// }


//Traditional
// function myfunc(a)
// {
//     document.write("Kem Cho...!")
// }
// myfunc();

//Not Working

// myfunc(5);
// var myfunc=a=>
// {
//     document.write("Majama ne........!"+a)
// }

// let myfunc1=(a)=>a*a
// document.write(myfunc1(6))
// document.write("<br>")
// let myfunc2=(a,b)=>a*b
// document.write(myfunc2(6,8))
// document.write("<br>")
// document.write("<br>")
// let myfunc2=a=>a*a
// document.write(myfunc2(4))
// document.write("<br>")

//21/10/21

// let x=function(a)
// {
//     return a*a;
// }
// // document.write(this);
// document.write(x(4));

// let str1="HAPPY DIVALI";
// let str="happy divali";
// let str2="skill Qode  ";
// let str3="Work hard in silence, let your success be your noice";

// // document.write(str1.charAt(2,6));
// document.write(str1.toLowerCase());
// document.write("<br>")
// document.write(str.toUpperCase());
// document.write("<br>")
// document.write("<br>")
// document.write(str2.concat(str));
// //one str ---sec str
// document.write("<br>")
// document.write(str3.charCodeAt(9))
// document.write("<br>")
// document.write(str3)

// document.write("<br>")
// document.write(str3.substr(0,22))
// //two string

// document.write("<br>")
// document.write(str2.lastIndexOf('ll'))
// document.write("<br>")

// document.write(str.lastIndexOf('i'))
// document.write("<br>")
// document.write("<br>")

// // document.write(str.)

// let str4=str2.replace('skill','my')
// document.write(str4)
// document.write("<br>")
// let str5="+917063859659";
// // document.write(str5)
// // document.write("<br>")
// // document.write(str5.substr(3,13))
// let str6="6 ";
// let str6=`'${str5}'`;
// document.write(str6)

// let str8 = "0123456789";  
// console.log(str8.slice(2,-5))   
// console.log(str8.slice(2,5))

// console.log(str8.substr(2,-5))
// console.log(str8.substr(2,5))

// console.log(str8.substring(2,-5))
// console.log(str8.substring(2,5))

// let a = 'a'
// let b = 'a'
// if (a < b) 
// { // true
//   console.log(a + ' is less than ' + b)
// } else if (a > b)
// {
//   console.log(a + ' is greater than ' + b)
// } else
// {
//   console.log(a + ' and ' + b + ' are equal.')
// }
// console.log= str.anchor('contents_anchor');
// var worldString = 'Hello, world';
// document.write(worldString.small());     // <small>Hello, world</small>
// document.write(worldString.big());       // <big>Hello, world</big>
// document.write(worldString.fontsize(7));

// 'ABC'.codePointAt(0)                        // 65
// 'ABC'.codePointAt(1).toString(16)           

//padend----space ]




// function show()
// {
//     str1=`"EmailAddress":"Owen_Hunter9749@elnee.tech"`;
//     // console.log(str1.substr(0,15))
//     // console.log(str1.substr(15,29))
//     // console.log(str1.slice(15,31))
//     // console.log(str1.slice(31,38))
//     // console.log(str1.substring(38,))
// }
// console.log(show());

// let show=a=>
// {
    // str1=`"EmailAddress":"Owen_Hunter9749@elnee.tech"`;
    // console.log(a.substr((a.lastIndexOf(':'))))
    // console.log(a.substr((a.lastIndexOf(':'))))
    // console.log(a.substr((a.lastIndexOf('@'))))
    // console.log(a.substr((a.lastIndexOf('.'))))
    // console.log(a.trimEnd(-4));
    // console.log(a.valueOf(16));
    // console.log(a.padEnd(0, ':'))
    // console.log(a.endsWith('@', '"'));
    // console.log
    
    // console.log(a.substr(15,29))
    // console.log(a.slice(:,31))
    // console.log(a.slice(31,38))
    // console.log(a.substring(38,))
// }
// show(`"EmailAddress":"Owen_Hunter9749@elnee.tech"`);
// show(`"EmailAddress":"Owen_Hunter9749@elnee.tech"`);

//25/10/2021-*-*--*-**-*-*-**-*-**-*-*-*-*-**-*-*



// sss
// email(`EmailAddress:"Deborah_Egerton8037@irrepsy.com" 


/////array--------function------------------------
//   1.push

// let arr=[];
// let email=(a) => 
// {
//     arr.push(a.substring(0, a.lastIndexOf(':')));
//     arr.push(a.substring(a.lastIndexOf(':')+2,a.lastIndexOf('@')));
//     arr.push(a.substring(a.lastIndexOf('@')+0, a.lastIndexOf('.')));
//     arr.push(a.slice(a.lastIndexOf('.')+1,-1));
   
   
   
//     console.log(a.substring(0, a.lastIndexOf(':')));
//     console.log(a.substring(a.lastIndexOf(':')+2, a.lastIndexOf('@')));
//     console.log(a.substring(a.lastIndexOf('@')+1, a.lastIndexOf('.')));
//     console.log(a.slice(a.lastIndexOf('.')+1,-1));
// }
// email(`"EmailAddress":"Owen_Hunter9749@elnee.tech`);
// console.log(arr)
// console.log(arr.pop());
// console.log(arr)
// console.log(arr.length);

// let ar1=[];
// console.log(ar1.pop());

// let myarray="Raj,Kamal,Mohan";
// console.log(myarray);

// let myarray=arr.join(" - ")
// let newarray=arr.toString();
// console.log(newarray);


// concanplay.log(arr.unshift("Skill"));
// concanplay.log(arr.unshift("Qode"));
// console.log(arr)
// console.log(arr.shift());
// console.log(arr)

//unshift----agal thi add kare
//shift------pachal thi alag kare
//push-------bahar kadhe lifo
//pop--------pachal thi alag kare----lifo
//lenth------lenth print kare
//tostring---
//join-------


// console.log(arr)
// console.log(arr.length());


//26/10/2021-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-


//s k i l l q  o   d   e
//0 1 2 3 4 5  6   7   8      n-2 n-1 n
//s e k d i o  l   q   l
// let prg=a=>
// {
//     console.log(a)
//     // console.log(a.substr(0,1),a.substring(8),a.slice(1,-7),a.slice(7,-1),a.substring(2,3),a.substring(6,7),a.slice(3,4),a.substring(5,6),a.slice(4,-4)) 
    
    

//     console.log(a.substr(8,9))
//     console.log(a.substr(1,1))
//     console.log(a.substr(,))
//     console.log(a.substr(2,2)) 
//     console.log(a.substr(8,9))    
     
// }
// prg("Skillqode");

// let arr=[];
// let email=(a) => 
// {
//     arr.push(a.substring(0, a.lastIndexOf(':')));
//     arr.push(a.substring(a.lastIndexOf(':')+2,a.lastIndexOf('@')));
//     arr.push(a.substring(a.lastIndexOf('@')+0, a.lastIndexOf('.')));
//     arr.push(a.slice(a.lastIndexOf('.')+1,-1));
   
   
   
//     // console.log(a.substring(0, a.lastIndexOf(':')));
//     // console.log(a.substring(a.lastIndexOf(':')+2, a.lastIndexOf('@')));
//     // console.log(a.substring(a.lastIndexOf('@')+1, a.lastIndexOf('.')));
//     // console.log(a.slice(a.lastIndexOf('.')+1,-1));
// }
// email(`"EmailAddress":"Owen_Hunter9749@elnee.tech`);
// console.log(arr)



// let arr=[];
// let prg=a=>
// {
    
//     let n=a.length
//     console.log(a)
//     // arr.push(a.substr(0,1),a.substring(8),a.slice(1,-7),a.slice(7,-1),a.substring(2,3),a.substring(6,7),a.slice(3,4),a.substring(5,6),a.slice(4,-4)) 
    
//     // let n=8;
//         // for(i=0;i>a;i++)
//         // {
//         //     console.log(a.length)
           
//         // }
     
// }
// prg("Skillqode");
// console.log(arr)

// let arr=[];

// let prg=a=>
// {
//     let n=8;
//     for(i=0;i>n;i++)
//     {
//         if(i==n)
//         {
//             b=n-1
//             console.log(a)
//             //n-1;
//             //console.log(a)
//         }
//         elsess
//         {
//             console.log(a)
//         }
//     }
  
    
// }
// prg("Skillqode");
// console.log(arr)

// let arr1=[];
// let n=9;
// let prg1=a=>
// {
//     console.log(a.length)
//     for(i=0;i<n;i++)
//     {
//         console.log(a)
//         console.log()
//     }   


// }
// prg1("012345678");
// console.log(arr1)

// let arr10=[];
// let n=['s', 'k', 'i', 'l', 'l', 'q', 'o', 'd', 'e'];

//     {
//         console.log(n);
//         console.log(a,n-9,n-1,n-8,n-2,n-7,n-3,n-6,n-4,n-5)
//         console.log(n-8)
//         ,n-9,n-1,n-8,n-2,n-7,n-3,n-6,n-4,n-5


// let a;
// for(a=0;a<=25;a++)
// {
//     if(a%2==0)
//     {
//         document.write("<br>",a,"even");
//     }
//     else if(a%2==1)
//     {
//         document.write("<br>",a,"odd");
//     }
// }


// var arr=[];
// let converstring=st =>{
//     console.log("string length:"+st.length);
//     let n=st.length;
//     for(let i =0;i<=n/2;i++)
//     {
//         console.log();
//         arr.push(st[i]);
//         arr.push(st[--n]);
//     }
// }
// let str="Skillqode";
// converstring(str);
// console.log(arr);

// const animals = ['akash', 'jay', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);


// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// let str = "7624078578"
// console.log(str)
// let n = str.length;
// console.log(n)

// if (n % 2 == 1) {
    
//     console.log(str.charAt(n / 2))
// }
// else {

//     console.log(str)
// }
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
 
// console.log(array3);

    //  arr = [];
    //     let a = [+9,1,7,6,2,4,0,7,8,5,7,8];
    //      if(a==10)
    //         {
    //              console.log(a);
    //         }
    //         console.log(a.fill('*',-2, 2));

    //         arr = [];
    //         let a = [+91,8,0,0,0,7,8,6,4,8,5];
    //          if(a==10)
    //             {
    //                  console.log(a);
    //             }
    //             console.log(a.fill('*',2, -2));
//                 let arr = [];
// let find = (a) =>
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
// // find('+917624078578'); 
// let arr = [];
// let find = (a) =>
// {
//     let b = a.length;
//     console.log(b);
//     for (let i = 0; i < b; i++)
//     {
//         arr.push(a[i]);
//     }
//     console.log(arr);
//     console.log(arr.fill( '*',2,a.indexOf('@')-2)); 
// }
// find('akashsojita44@gmail.com'); 
// let a=[2]
// for(let i=1;i<=10;i++)
// {
//     console.log(2,i,a*i)
// }
// let arr = [`INDIA`, `1350000000`]
// let arr1 = [`LONDON`, `200000000`]
// let arr2 = [`USA`, `50000000`]
// let arr3 = [`JAPAN`, `2005699201`]

// console.log(arr.join(`-`), "  " + arr1.join(`-`), "  " + arr2.join(`-`), "  " + arr3.join(`-`))

// let percentageOfWorld1 = a => {
//     let P = 4500000000;
//     let p = []
//     let n = a.length;
//     console.log(n);
//     for (let i = 0; i < n; i++) {
//         p.push(a[i]);
//     }
//     console.log(p)
//     console.log(p.shift(), p / P * 100, "%")

// }
// percentageOfWorld1(arr)
// percentageOfWorld1(arr1)
// percentageOfWorld1(arr2)
// percentageOfWorld1(arr3)

// let array = ["Raj","kamal","Ram"]
// // console.log(array)
// array.forEach(element => console.log(element))

// array.forEach((prg,index)=>console.log(index+"-"+prg));

// array.forEach((prg,index,array)=>console.log(index+"-"+prg+"-"+array))


let array1 = ["Raj","kamal","Ram"]

// array1.forEach((callbackfn)=>{console.log(callbackfn) });

// array1.forEach((callbackfn,thisArg)=>{console.log(thisArg+"-"+callbackfn) });

//------------inline
array1.forEach(function(element) {console.log(element)})

array1.forEach(function(element,index) {console.log(index+"-"+element)})

array1.forEach(function(element,index,array) {console.log(index+"-"+element+"-"+array)})













































// let str2=`"EmailAddress":"David_Amstead7176@iatim.tech"`;
// console.log(str2.substr(0,15))
// console.log(str2.substr(15,))
// console.log(str2.slice(15,33))
// console.log(str2.slice(33,39))
// console.log(str2.substring(39,))

// let str3=`"EmailAddress":"David_Torres6323@typill.biz"`;
// console.log(str3.substr(0,15))
// console.log(str3.substr(15,))
// console.log(str3.slice(15,32))
// console.log(str3.slice(32,39))
// console.log(str3.substring(39,))

// let str4=`"EmailAddress":"Abdul_Stanton2725@supunk.biz"`;
// console.log(str4.substr(0,15))
// console.log(str4.substr(15,))
// console.log(str4.slice(15,33))
// console.log(str4.slice(33,40))
// console.log(str4.substring(40))
  
// let str5=`"EmailAddress":"Bryon_Wright8993@eirey.tech"`;
// console.log(str5.substr(0,15))
// console.log(str5.substr(15,))
// console.log(str5.slice(15,32))
// console.log(str5.slice(32,38))
// console.log(str5.substring(38))

// let str6=`"EmailAddress":"Carl_Griffiths2666@kideod.biz"`;
// console.log(str6.substr(0,15))
// console.log(str6.substr(15,))
// console.log(str6.slice(15,34))
// console.log(str6.slice(34,41))
// console.log(str6.substring(41))

// let str7=`"EmailAddress":"Celina_Ingram7376@iatim.tech"`;
// console.log(str6.substr(0,15))
// console.log(str6.substr(15,))
// console.log(str6.slice(15,34))
// console.log(str6.slice(34,41))
// console.log(str6.substring(-4))
