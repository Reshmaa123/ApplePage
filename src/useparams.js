import React, { useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Useparams = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then()
    .catch(err=>{
        console.log(error);
    })})

  return (
    <div>
        <ul>
            data.map((item)=>{
                return(
                    <NavLink>
                        <li>{item.name}</li>
                    </NavLink>)
            })
        </ul>
    </div>
  )
}

export default useparams