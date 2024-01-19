import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Params = () => {
    const [data,setData]=useState('')
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4000/student/${id}`)
        .then(res=>{
setData(res.data)
console.log(res)
        })
        .catch(error=>{
console.log(error);
        })
    })
  return (
    <div>Params-{id}
    <table>
        <tr><td>ID</td>
            <td>{data.id}
            </td></tr>
        <tr><td>Name</td>
            <td>{data.name1}</td></tr>
    </table>
    
    
    </div>
  )
}

export default Params