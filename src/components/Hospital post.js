import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, useNavigate} from 'react-router-dom'; 
import EditHospital2 from './EditHospital2';
const Hospital2 = () => {
    const navigate=useNavigate()
    const[loading,setLoading]=useState(true);
    const[id,setId]=useState('')
    const[name1,setName1]=useState('')
    const[place,setPlace]=useState('')
const[data,setData]=useState([])
    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/student`,{id,name1,place})
        .then(response=>{
        console.log(response.data)
        alert('data Added')
        
        })
        .catch(error=>{
            alert("data not added")
    });}
        useEffect(()=>{
            axios.get(`http://localhost:4000/student/${id}`)
            .then((response)=>{
            setData(response.data);
            setLoading(false);
            console.log(response.data)
        })
        .catch((error)=>{
            alert(error);
        })
},[id]);
const deletedata =(id)=>{
    if(!window.confirm("want to delete data"))
    {
        return false;
    }
    else{
axios.delete(`http://localhost:4000/student/${id}`)
.then(response=>{
    console.log(response.data)
alert('data deleted')
navigate('/Hospital2')
})
.catch(error=>{
    alert('data not deleted')

})

    }
}
  return (
    <div>
        <div className="row"><div className="col-6">
                    <h1>All Data</h1>
        <form onSubmit={submitHandler}>
    <input type="number" name="id" value={id} onChange={(e)=>setId(e.target.value)}
    />
    <br/>
    <input type="text" name="name1" value={name1} onChange={(e)=>setName1(e.target.value)}/><br/>
    <input type="text" name="place" value={place} onChange={(e)=>setPlace(e.target.value)}/>
    <br/>
    <button type="submit" >Add</button>
</form></div>


<div className="col-6">
<h4>The Hospital table</h4>
<h4>The Hospital table</h4>
          
<table>
    <th>id</th>
    <th>patient</th>
    <th>description</th>
    <th>Edit</th>
    <th>Delete</th>
    <tbody>
        {data.map((student)=>{
    return(
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name1}</td>
            <td>{student.place}</td>
<td>
    <NavLink to ={`/EditHospital2/${student.id}`} >
    <button className='btn btn-success'>edit</button></NavLink></td>
<td>
    <button className='btn btn-danger' onClick={()=>deletedata(student.id)}>Delete</button></td>
    
        </tr>
        )})}
    </tbody>
</table>

    </div>
</div>
    </div>
  )
}
export default Hospital2