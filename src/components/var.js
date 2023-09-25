import React,{components} from 'react';

const ListEx=()=>{
const Student=[
    {
        id:101,
    name:'Reshma',
    place:'sheriguda'
},
    {
        id:102,
    name:'Reshma2',
    place:'sheriguda'},
    {
        id:103,
    name:'Reshma3',
    place:'sheriguda'},   
]
return(
    <div className="abc">{
        Student.map((stu)=>
        {
            return(
                <h1 key={stu.id}>{stu.id} name is {stu.name} address is {stu.place}</h1>
            )})

        }
    </div>
)}
export default ListEx;
    
