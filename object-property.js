const students=[
    {id:124,name:"sunny"},
    {id:125,name:"sagor"},
    {id:126,name:"silviya"},
    {id:127,name:"samrin"},
];
// const output=[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result=element.name;
//     output.push(result);
// }
// console.log(output);

const names=students.map(s=>s.name);
const id=students.map(s=>s.id);
const bigger = students.filter(s=>s.id>125);
const biggerOne = students.find(s=>s.id>125);
console.log(biggerOne);
 