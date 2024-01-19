import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
const DeleteHospital = () => {
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
                console.log(response.data)
            })
            .catch((error)=>{
                alert(error);
            })
    },[id]);
    
    
      return (
        <div>
            <div className="row"><div className="col-6">
                        <h1>Here You can edit data</h1>
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
    <table>
        <th>id</th>
        <th>patient</th>
        <th>description</th>
        <th>Edit</th>
       
        <tbody>
            {data.map((student)=>{
        return(
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name1}</td>
                <td>{student.place}</td>
    <td>
        <NavLink to ="/EditHospital2" >
        <button className='btn btn-success'
        onClick={(editedata)=>(student.id)}>edit</button></NavLink>
        </td>
    

            </tr>
            )})}
        </tbody>
    </table>
    
        </div>
    </div>
        </div>
      )
    }
    
export default DeleteHospital