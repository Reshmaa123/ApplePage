import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const PostData = () => {
    const [id,newId]=useState('');
    const [name1,newName1]=useState('');
    const [place,newPlace]=useState('');

    const submitHandler=(e)=>{
        
        e.preventDefault();
        axios.post("http://localhost:4000/student/",{id,name1,place})
        .then((res)=>{
            alert("data added");
            newId('')
            newName1('')
            newPlace('')})
            .catch((error)=>
            {
                console.log("Error:",error);
            })
        
    };
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={id} onChange={(e)=>newId(e.target.value)} placeholder="ID"/><br/>
            <input type="text" value={name1}  onChange={(e)=>newName1(e.target.value)} placeholder="Name1"/><br/>
            <input type="text" value={place} onChange={(e)=>newPlace(e.target.value)} placeholder="Place"/><br/>            <input type="submit" value="AddStudent"/>

</form>

    </div>);


}
export default PostData;