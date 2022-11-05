let s='tejabhi';
console.log(s);
let h1=document.getElementById("txt");
console.log(h1)
let m=document.getElementById("txt1");
h1.innerHTML=s
m.innerHTML=s

let students=[
    {name:"teja",age:25,marks:500},
    {name:"Suhas",age:30,marks:423},
    {name:"Ranjith",age:18,marks:600},
    {name:"suppi",age:26,marks:222}
]
console.log(students)
console.log(students[0].name)
let studentDiv=document.getElementById("s1");

for(let student of students)

//console.log(student)
//console.log(student.name)
studentDiv.innerHTML+=
`
<div>
<hi>Name:${student.name}</h1>
<p>Marks:${student.marks}</p>
</div>

`