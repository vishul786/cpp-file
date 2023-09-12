// let lecture = 10;
// let section=3;
// let title='Javascript';
// const course={
//     lecture:19,
//     section:3,
//     title:'Javascript',
//     notes:{
//         introduction:"Welcome to JS course",
//         },
//     enroll(){
//         console.log('you are successfully enrolled');
//     }    
// }
// course.enroll();
// console.log(course)
// course.price=122
//.Objects are dynamic in nature
      //*********Factory Function*******
// function createCourse(title){
//    return {
        
//         title:title,
//         notes:{
//             introduction:"Welcome to JS course",
//             },
//         enroll(){
//             console.log('you are successfully enrolled');
//         }    
//     }
    
// }      
//    *****************Delete Property***************
//    const course.title;
//    course.checkEnrollment=function(){
//     console.log('30 user are enrolled!!');
//    }
//    course.enroll()
//    console.log(course);

    //******Constructor Function******
//  function Course (title){
//     this.title=title,
//     this.enroll=function(){
//         console.log('you are successfully enrolled');
//     }
//  }   
 //************delete property*************
//  const course=new Course('Javascript');
//  delete course.title;
//  course.checkEnroll=function(){
//     console.log("30 user are enrolled");
//  }
//  course.enroll();
//  console.log(course)

// const course=new Course('Javascript');
// console.log(course.constructor)
// console.log(new  Course.constructor)


// const course={     //we write like this
        
//     title:title,
//     notes:{
//         introduction:"Welcome to JS course",
//         },
//     enroll(){
//         console.log('you are successfully enrolled');
//     }    
// }


//but Compiler understand it as
// const course=new Object({
        
//     title:title,
//     notes:{
//         introduction:"Welcome to JS course",
//         },
//     enroll(){
//         console.log('you are successfully enrolled');
//     }    })



//   Function is a  Reference type
//   Jab hm koi contruction 
//   "Function" bhi Js ,me ek Object hone wala hai
//   Constructor of a function is named as Function



     //*****This is a Constructor Function******
// const Course_1=new Function('title',`
// this.title = title,
// this.enroll=function(){
//     console.log('you are successfully enrolled');
// }`
// )


// const Course_2=new Course_1("JavaScript");
// Course_2.enroll();

    //  // Primitive Datatype
    //  let number=10;
    //  //pass by value
    //  let num_2=number
    //  number=15;
    //  console.log(number);
    //  console.log(num_2);

    //  // Reference Datatype
    //  let obj= {number:10};
    //  //Pass by reference
    //  let obj2=obj;    Pass memory llocation of obj to obj2
    //  obj.number=15    As we change either obj or obj2,changes 
    //                    reflect in both the variable
    //  console.log(obj);
    //  console.log(obj2);
// use spread operator , pass by value in object


// const course={
//  title : 'JavaScript',
//  enroll(){
//      console.log('you are successfully enrolled');
//  }
// }
//Approach 1:
// const course_1={...course}
// course_1.title='c++';


//Approach 2:
// const course_1=Object.assign({},course)
// course_1.title='c++'

//Approach 3:
// for( let key in course){
//     console.log(key,course[key]);
// }

//Approach 4:   for.....of ... loop
// const course_1={};
// for( let key of Object.keys(course)){
//        // console.log(key,course[key]);
//        course_1[key]= course[key]
//     }
// *********************Contructor Function*****************
// function Course(title){
//     this.title = title,
//     this.enroll=function(){
//         console.log('you are successfully enrolled');
//     }
//    } 
//    const course = new Course('JavaScript');
//    console.log(course.constructor);
//    console.log(course.constructor);  
//Primitive Data type
// let number=10;
// //Pass by Value
// let number_2=number
// number=15;
// console.log(number);
// console.log(number_2);

// //Reference Data Type
// let obj={number: 10}
// let obj2=obj;
// obj.number=30;
// console.log(obj);
// console.log(obj2);

// const course={
//      title : 'JavaScript',
//      enroll(){
//          console.log('you are successfully enrolled');
//      }
// }

// const course_1={...course}
// course_1.title="C++";

// const course_1= Object.assign({},course);

// for(let key in course){
//     console.log(key,course[key]);
// }

// const course_1 = {};
// for(let key of Objects.keys(course)){
//     console.log(key,course[key]);
// }


//*************Exercise************/
//Use of factory and constructor function when creation of 
//multiple objects
// let square ={
//     side: 10,
//     get area(){                //getter function
//         return this.side * this.side
//         }
//     // function area(){
//     //     return val*val
//     // }
// };

// square.side = 30
// console.log(square.area)
     
//console.log(stringConcat('+','this', 'is', 'invalid'))
// function stringConcat(separator,...string){
//     let s1 =''
//     string.forEach((i,j) => {
//         if(j == string.length-1){
//             s1+= i
//         }
//         else{
//             s1+= i+ separator
//         }
//         // return s1
//     });
    // for(let i=0; i<string.length;i++){
    // if(i==string.length-1){
    //    s1= s1 + string[i] 
    // }
    // else{
    //    s1= s1 + string[i] + '+' 
    // }      
//     return s1 
// }



//console.log(stringConcat('+','this', 'is', 'invalid'))


//arr = [1,2,3,4,5,6,7,8]

 arr = [1,2,3,4,5,6,7,8]


// let first=arr[0]
// let second = arr[1]
// let third = arr[2]
// let other = arr.slice(3)

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(other)

//***Below statement is an example of destructuring */

let [first,second,third,...other] = [1,2,3,4,5,6,7,8]
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(other)

//*****Problem: Create home using matchsticks, as 6 matchesticks
// required for creation of 1 home, and next further home require 5 matchsticks.
// So calculate the no of sticks require for n homes. 

var no = 0
function matchsticksReq(n){
      
    // no += (n-1)*5 + 6    
    return (n-1)*5 + 6  ;
}
    
console.log(matchsticksReq(1))
console.log(matchsticksReq(4))
console.log(matchsticksReq(87))


 
