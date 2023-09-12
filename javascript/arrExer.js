const character =[
    {
        name: 'Tarak Mehta',
        height:'172',
        mass: '77',
        eye_color: 'brown',
        gender: 'male'
    },
    {
        name: 'JethaLal',
        height:'145',
        mass: '136',
        eye_color: 'black',
        gender: 'male'
    },
    {
        name: 'Babita Ji',
        height:'150',
        mass: '49',
        eye_color: 'grey',
        gender: 'female'
    },
    {
        name: 'Krishnan Iyer',
        height:'168',
        mass: '84',
        eye_color: 'black',
        gender: 'male'
    },
   
];

//Get array of all names
// const names = character.map(ch =>  ch.name)
// console.log(names)

//Get an array of all the objects with just name and height properties
// const properties = character.map((ch) => {
//      return      {
//         name: ch.name,
//         height: ch.height
//         }
// })
// console.log(properties)
//Get total height of all the characters
 
 const totalHeight =character.reduce((preHeight, character) =>{
    return preHeight + Number(character.height)
 } , 0)

//  console.log('Total Height:'+totalHeight)
//Get characters with mass greater than 100

// const maxMass = character.filter(( ch) => {
//     return ch.mass>100
// } )
// console.log(maxMass)

//Get all male characters

const maleChar = character.filter((ch) => ch.gender=='male'
      
)
// console.log(maleChar)
//Sort by gender
// const sortGen = character.sort((character1,character2) => 
// {
//     if(character1.name < character2.name){
//         return -1;
//     }
//     if(character1.name > character2.name){
//         return 1;
//     }
//     return 0
// })
// console.log(sortGen)



//Sort by name

const sortName = character.sort((character1,character2) => 
{
    if(character1.name > character2.name){
        return -1;
    }
    if(character1.name < character2.name){
        return 1;
    }
    return 0
})
// console.log(sortName)

//Does every characters have mass more than 40?


// console.log(character.every((ch) => ch.mass>100))

//Does every characters have blue eyes

// console.log(character.every((ch) => ch.eye_color == 'blue'))


//Is there at least one male character

// console.log(character.some((ch) => ch.gender == 'male'))



//Is ther at leat one male character taller than 200

console.log(character.some((ch) => ch.eye_color == 'blue'))


