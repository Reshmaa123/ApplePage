import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Useparams = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>{
    setData(res.data);})
    .catch(err=>{
        console.log("error");
    })})

  return (
    <div>
        <ul>{
            data.map((item)=>{
                return(
                    <NavLink key={item.id} to={`/services/${item.id}`}>
                       <li>{item.title}</li>
                    </NavLink>)
})}
        </ul>
    </div>
  )
}

export default Useparams