

//Convert object to JSON(string) by using JSON.stringify
// 1
const person={
    id:1,
    name:'Ahsan',
    job:'Programmer'
}
const stringified=JSON.stringify(person);
console.log(person);
console.log(stringified);

//2

const player={
    name:'Messi',
    club:{
        clubName:'PSG',
        stadium:'Old Trafford'
    },
    address:['USA','England'],
    wife:'Cristina',
    salary:50000,
}

const stringifiedPlayer=JSON.stringify(player);
console.log(stringifiedPlayer);

//Covert JSON(string) to object by using JSON.parse
// 1
const converted=JSON.parse(stringifiedPlayer);
console.log(converted);
