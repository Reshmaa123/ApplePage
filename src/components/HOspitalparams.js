import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import Params from './Params';
const HOspitalparams = () => {
    const [data,setData]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4000/student`)
        .then(res=>{
            setData(res.data)
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
  return (

<div>
<ul>
    {data.map(item=>{
    
        return(
        <NavLink to={`/Params/${item.id}`}>
<li key={item.id}>{item.name1}</li></NavLink>
    
    )})}
</ul>
    </div>
  )
}

export default HOspitalparams