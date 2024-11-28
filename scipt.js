// object destucturing 

const person = {
    firstName: "nikhil",
    lastName:"pandey"
};

// old way ..

// let firstName= person.firstName;
// let lastName= person.lastName;

// object destructuring..

// const {firstName,lastName}= person;
//we can also chabge the name as..
// const {firstName:fname,lastName:lname}= person;
// console.log(fName + " " + lname );

// array destructring  
const number=[1,2,3,4,5];

// old way..
// let num1=number[0];
// let num2=number[1];

const [a,,b,,c]= number // we have to give comma if we want to skip the  number 
console.log(a + " " + b +" " + c);

//spread opreator(...) - to copy array or part of an array int a new array..

const array1= [1,2,3,4,5];
const array2= [6,7,8,9];

// const combinedArray=array1 +array2  (other way )

// const combinedArray = [...array1,...array2] 
console.log(combinedArray)
// ... is spread opreator which copy the value of all value
const arr1=[10,20,30,40];
const arr2=[...arr1]
console.log(arr2)


// browser object model (BOM)
// (DOM  is document object model )


//     ======================JSON===================
// JSON IS USED TO SEND DATA FROM SERVER TO WEB PAGE


// json-server --watch db.json  ======== to run 
// json-server --watch db.json

//the fetch() method starrts thr process of fetching the resourse from the server
// the fetch method returns a promise that resolves to a response object..
//means fetch return a respose object...

// javascript is synchronous  language but sometime work as asynchronous

//asynch function always return a promise the asynch keyword transform a reguular javascript
//function into  an asynchronous function , causing it to return a promise

// the await keyword is used inside the async function to cause its execution to wait for  a
//promise to resolve before continuing...

//means asynchronos function works as syncronous (pahle execution pura hoga fir age badega)

// asynchronus functio returns the promise and we have to get value from that promise

// const getdata=async () =>{
//     let  data= "hello world ";
//     return data;   // it retrun the promise...
// };

// getdata().then((x)=>{
//     console.log(x);//  to get the value...
// })

// BY USING  AWAIT .....
// const getdata = async () =>{
//     let y= await "hello world ";// await holds the execution till it resolve
//     console.log(y);
// }
// // we can use await in async function always...

// getdata();

// asynch and fetch both return promise.....