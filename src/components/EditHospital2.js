import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const EditHospital2 = () =>    {
  const[id,setId]=useState('')
  const[name1,setName]=useState('')
  const[place,setPlace]=useState('')
  const navigate=useNavigate();
  const {sno}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:4000/student/${sno}`)
    .then(res=>{
      console.log(res.data)
      setId(res.data.id)
      setName(res.data.name1)
      setPlace(res.data.place)
    })
    .catch(error=>{
      console.log(error);
    })
  },[])
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:4000/student/${id}`,{id,name1,place})
    .then(res=>{
alert('data updated')
navigate('/AddPatient')
    })
    .catch(error=>{
      console.log("error")
    })
    
  }
  return (
    <div>
<div> {sno}
<form onSubmit={submitHandler}>
<p>Id  <input type="text" name ="id1" value={id}
onChange={(e)=>setId(e.target.value)}/><br/></p>
 <p>Name <input type="text" name="name" value={name1}
 onChange={(e)=>setName(e.target.value)}
 /><br/></p>
 <p>Place <input type="text" name="place" value={place}
 onChange={(e)=>setPlace(e.target.value)}
 /><br/></p>
  <input type="submit" value='Update'/>
</form>

</div>
    </div>
  )
}

export default EditHospital2