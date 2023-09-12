console.log("This is an Javascript sample file.");

function greet(name){
    console.log(name +" is a good boy.");
}

function sum(name,name1,name2){
    let d=name+" "+name1+ " "+name2;
    return d;
}

let name="Amit";
let name1="Sumit";
let name2="Garvit";
let name3="Ankit";
let name4="Amrit";

greet(name);
greet(name1);
greet(name2);
greet(name3);
greet(name4);
let res=sum(name,name1,name2);
console.log(res);
