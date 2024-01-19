import React from 'react'
//import {useState} from react
import { useState,useEffect } from 'react'
import AddPatient from './AddPatient'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPatienttable = () => {
    const[id,setId]=useState('')
const[name1,setName1]=useState('')
const[place,setPlace]=useState('')
const[data,setData]=useState([])
const navigate=useNavigate()
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
    useEffect(()=>{
        axios.get(`http://localhost:4000/student/${id}`)
        .then((response)=>{
        setData(response.data);
        console.log(response.data)
    })
    .catch((error)=>{
        alert(error);
    })
},[id]);
const updatedPatients=()=>{
    axios.get(`http://localhost:4000/student/${id}`)
    .then((response)=>{
    setData(response.data);
    navigate('/AddPatient')
})
.catch((error)=>{
    alert(error);
})
}

  return (
    <div>
<form onSubmit={submitHandler}>
    <input type="text" name="id" value={id}placeholder='Id'
    onChange={(e)=>setId(e.target.value)}
    />
    <br/>
    <input type="text" name="name1" placeholder='Name'
    value={name1} onChange={(e)=>setName1(e.target.value)}/><br/>
    <input type="text" name="place"  placeholder='Address'
    value={place} onChange={(e)=>setPlace(e.target.value)}/>
    <br/><br/>
    <input type="submit" onsubmit={submitHandler}/><br/>
    <br/>
    <button onClick={updatedPatients}>Show Updated Patients</button>
</form>




    </div>
  )
}

export default AddPatienttable