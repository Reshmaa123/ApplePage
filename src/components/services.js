import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Services = () => {
    const{id}=useParams();
    const [data,setData]=useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
        setData(res.data)})
        .catch((error)=>{
            console.log("error")})
        },[id]
    );
  return (
    <div> 
        <h1>Services-{id}</h1>
        <table>
            <tr><td>id</td>
            <td>{data.id}</td></tr>
            <tr><td>title</td>
            <td>{data.title}</td></tr>
            <tr><td>body</td>
            <td>{data.body}</td></tr>   
            <tr><td>userId</td>
            <td>{data.userId}</td></tr>   
        </table>
    </div>
  )
}

export default Services