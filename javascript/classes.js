// //Declaring a class
// class Product{
//     constructor(itemName){
//         console.log("Passed by Furniture:" +itemName);
//         this.itemName=itemName;
//     }

//         getItemName(){
//              return this.itemName+ " is a Product."
//         }
//         // this.price=price;
//         // this.discount=discount;
//         // this.productCode=productCode;
    
// }

// class Furniture extends Product{
//     constructor(itemName){
//           super(itemName);
//     }

//     getItemName(){
//         return this.itemName+" is a Furniture. ";
//     }
// }


//  let pencil =new Product('Pencil');
//  let chair = new Furniture('Chair');

// const Product1= class {
//     constructor(item,price,discount,productCode){
//         this.item=item;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(  val){
//         this.discount=val;
//     }

//     discountValue(){
//         return this.discount*this.price/100;
//     }
// };

// let chair = new Product1('Chair',300,20,'A40');


//************Arrays***********

//const array = [1,2,3,4,5,6,7,8,9];
const array = new Array(1,2,3,4,5,6,7,8,9);
//console.log(array[array.length-1])

//Push

// array.push(10)
// console.log(array.push(10));

// //Unshift

// // array.unshift(0)

// console.log(array.unshift(0));


// //Pop

// console.log(array.pop());

// //Shift

// // array.shift();
// console.log(array.shift());

// array[0]=true;
// array[0]={array:20};
// array[0]="Hello";
// console.log(array)
const names=['Amal','Dhawan','Akash','Akshit','Akash','Neha','Supriya'];
// names.indexOf('Akash');

//names.lastIndexOf('Akash');

// console.log(names.lastIndexOf('Akash'));
//names.indexOf('Akash');

//names.includes('Akshit',3);
console.log(names.includes('Akshit',3));
let channel=[{
    name:'Apna collge',
    subscriber:100000
},
{
    name:'Apni_Kakksha',
    subscriber: 20000
},
{
    name:'Amit Dhattarwal',
    subscriber:50000
}];

// console.log (channel.includes({   //only works in primitives not in references
//     name:'Apna College',
//     subscriber: 100000
// }))
//*********find()------ Return first element of array if predicate value is true



//*********  Type of Function

// //Arrow Function
// find((element) => {...}  )
// find((element,index) => {...}  )
// find((element,index,array) => {...}  )

//CallBack Function

// find(callbackFn)
// find(callbackFn , thisArg)


//Inline Function

// find(function callbackFn (element) {......})
// find(function callbackFn (element,index) {......})
// find(function callbackFn (element,index,array) {......})

// console.log (channel.find(function(element){ 
//     return element.name === 'Apni_Kakksha'
// }))

// Arrow functions
//console.log (channel.find(element => element.name === 'Apni_Kakksha'))

let names1 =['Amal','Dhawan','Akash']
let names2 =['Neha','Supriya','Arundhati']
//let names3 =names1.concat(names2)
let names3 =[ ...names1,...names2]
//console.log(names3.slice(1,4))


//For Loop
for(let i=0;i<names3.length;i++){
 //   console.log(names3[i])
}
//For of 
for(let i of names3){
  //  console.log(i)
}
//For each isn't eexist in Js as a loop but it present as method
names3.forEach(function(name,index){
    console.log(name,index);
})

//Join
let Student =['S','t','u','d','e','n','t']
console.log(Student.join('_'))

//Split
//  let Student =['S','t','u','d','e','n','t']
console.log(Student.splice('_'))

//Filter()

let cities = [
    {name: 'Mumbai', population: 234563},
    {name:'Delhi', population: 987352},
    {name: 'Banglore', population:5232341},
    {name: 'Chennai', population:123961},
    {name: 'Lucknow', population:6493292}
];

// console.log(cities.filter(city => {
//     return city.population>300000
// }))

// console.log(cities.filter(city => city.population>30000))



//Map ()
console.log(cities.map(city => city.population * 2))


//  program is execution is performed in two phase
//  1. Memory Allocation --> In this phase, declaration of variables and functions and as well as function definition
//  2. Code Execution -->In this phase, values are assigned to it and calling of function is done in stack manner.



