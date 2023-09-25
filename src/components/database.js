import 'datatables.net.js\jquery.dataTables.min.mjs';
import 'datatables.net-dt\css\jquery.dataTables.min.css';
import React, { useEffect,useState,Component } from 'react'
import axios from "axios";


const Database=()=>{
    const [id,setId]= useState('')
    const [name1,setName]= useState('')
    const [place,setPlace]= useState('')
const submitHandler=(e)=>{
    e.preventDefault();
    axios
    .post('http://localhost:4000/student',{id,name1,place})
    .then((res)=>{
    alert("data uploaded");
})
    .catch((error)=>{
        console.log("error");}
    )
return (
<div>
            <h1>HELLO</h1>
                <table><thead>
                    <tr><th>id</th>
                    <th>title</th>
                    <th>Body</th></tr>
                    </thead>
                   
                    <tbody>
                        </tbody>{
                        this.state.posts.map((data)=>{
return(
                    
                <tr key={data.id}>
                    <td >{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                
                </tr>);  } )}   </table>   
                        
    
     </div>
     )
      }}
      export default Database