import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const Edit = () => {
//const [post,setPost]=useState('');
const [data,setData]=useState([]);
const [id,setId]=useState([]);
const [title,setTitle]=useState('');
const [body,setBody]=useState('');
useEffect(()=>{
    axios.get(`http://localhost:4000/student/`)
.then((response)=>{
setData(response.data);
})
    .catch((error)=>{
        console.log("Error fetching data:", error);
    })
}, []);
const changeHandler=(e)=>{
const {name ,value}=e.target;
if(name==='id'){
    setId(value);}
    else if(name==='title'){
        setTitle(value);

    } else if(name==='body'){
        setBody(value);
        
    }
}
const submitHandler=(e)=>{
    e.preventDefault();

axios
.put(` http://localhost:4000/student/${id}`,{id,title,body})
.then((res)=>{
    console.log('Submit handler');
    alert("data updated");
    setId('');
    setTitle('');
    setBody('');
})
.catch((error)=>{
console.log("Error updating data:",error)
})}
const editHandler= (item)=>{
    setId(item.id);
    setTitle(item.title);
    setBody(item.body);
}
  return (
    <div><h1><i>Student Data</i></h1>
        <table>
            <thead><tr>
                <th>id</th><th>title</th><th>body</th>
                </tr>
            </thead>
            <tbody>
          {data.map((item) => (
            <tr key={item.id} onClick={()=>
            editHandler(item)}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <form onSubmit={submitHandler}>
            <input type="text" value={id} onChange={changeHandler} name="id" placeholder='Id'/><br/>
            <input type="text" value={title} onChange={changeHandler} name="title" placeholder='Title'/><br/>
            <input type="text" value={body} onChange={changeHandler}name="body" placeholder='Body'/><br/>
            <input type="submit" value="Edit student"/>
        </form>
    </div>
  )
          }       
export default Edit