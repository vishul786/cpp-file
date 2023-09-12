//Due to principel of leasr access
//How we get more output with least input

// Scope is by default global
// 1.Global Scope    
// 2.Local Scope or Block Scope
//Global Execution Context (GES)
// var name ='Amul'

// function sayName(){
//     var marks = 10
//     console.log(name)
// }


// sayName()
// console.log(marks)


//  var x=0;
// //Global Scope
// function first(){
//     //Local Scope  #1  
//     var x = 1;
//     console.log(x);
//     function childFirst(){
//         var x = 2;
//         console.log(x);
//         //Local Scope    #2
//         // var x=2
//     }
//     childFirst()
// }

// first()


// // // Global Scope
// function second(){
//     console.log(x);
//     //Local Scope  #1  
//     function childFirst(){
//         //Local Scope    #2
        
//     }
// }


// second();


//This is block Scope
//It only works for let and const and not for var
//

// var x=10;
// {
//     var x=1;
//     console.log(x);
// }
// console.log(x);


// ******** Rccommendation to use let or const
//  keywords in for -loop rather than var, as it generates  error***********






// if(true){
//     //this if block doesn't create an new scope
//     var foo = 'bar'
// }
// console.log(foo);

//Lexical Scope
// function dada(){
//     var name = 'Animesh Chaudhary';
//     //likes is not accessible is here
//     function Papa(){
//          console.log(name);
//         //name is accessible is here
//         //likes is not accessible here
//         function Beta(){
//             //Innermost level of the scope of chain
//             //name is also accessible here
//             var likes = 'Coding';
//         }
//         console.log(likes);
//         Beta()
//     }
//     Papa()
// }

// dada()





// ******Hoisting---Allocation of memory of variables before execution or run of program ********
//Phases of exceution of program in JS:
// 1.Creation of GEC    ;;;; GEC have two parts memory and code
// 2.Execution of statements of code
// 3.
// sayHello();



// !!!!!!!Difference between let,var and const
// 1. let and const introduced with ES6 ,these variable are hoisted but can't be accessed
// 2. Temporal Difference means it can't be accessed until u initialized at the time of declaration


// 


let foo='bar'
var bar = 'foo'
const baz = 'sop'
// console.log(foo)


//*********use if This keyword******** */

// let counter = createCounter(); 
// let counter1 = createCounter(); 
// function createCounter() {          //factory function
//     return{
//         count : 0,
//         increment : function(){
//         counter.count++;
//          }
//     }    
// }

// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// console.log(counter);

// var count = 0
// function incrementCounter(counter){
//     this.count++;
//     console.log(this)

// }
// incrementCounter();
// incrementCounter();
// let t3 = incrementCounter();
// incrementCounter();
// incrementCounter();
// console.log(this)
// console.log(t2) 
// console.log(t3) 
function Car(name){
    this.name = name;
    this.start = function(){
         console.log(this.name + ' started')
         console.log(this)
    }
}

let swift =  Car('Swift');
// swift.start(this.name);
// console.log(swift)
console.log(this.name)
console.log()






