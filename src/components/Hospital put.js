import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './hospital.css';
const Hospital = () => {
const[id,setId]=useState('')
const[name1,setName1]=useState('')
const[place,setPlace]=useState('')
const[data,setData]=useState([])
useEffect(()=>{

    axios.get(`http://localhost:4000/student/${id}`)
    .then(response=>{
        setData(response.data);
        console.log(response);
    })
    .catch(Error=>{
    
        console.log('error');
    
})},
[id],
);
const submitHandler =(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/student`,{id,name1,place})
    .then(response=>{
    
    alert('data Added')
    setId=('');
    setName1=('');
    setPlace=('')
    })
    
      
    .catch(error=>{
    
        console.log(Error)
        
    })
}

  return (
    <div>
        <div className="row">
            <div className="col-6">
<h1>All Hospital Data</h1>
<table>
    <th>
        id</th>
    <th>name1</th><th>place
    </th>
    <tbody >
        {data.map((student)=>{
            return(
        
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name1}</td>
           <td>{student.place}</td>
    
        </tr>
        )})}
    </tbody>
</table></div>
<div className="col-6 center text-center" >
<form onSubmit={submitHandler}>
    <input type="number" name="id" value={id} onChange={(e)=>setId(e.target.value)}
    />
    <br/>
    <input type="text" name="name1" value={name1} onChange={(e)=>setName1(e.target.value)}/><br/>
    <input type="text" name="place" value={place} onChange={(e)=>setPlace(e.target.value)}/>
    <br/>
    <input type="submit" onsubmit={submitHandler}/>
</form>
    </div></div></div>
  )
}

export default Hospital