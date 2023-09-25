import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const About = () => {
const [data,setData]=useState([]);

useEffect(()=>{
    axios.get("http://localhost:4000/student/")
.then((response)=>{
setData(response.data);
})
    .catch((error)=>{
        console.log(error);
    })
},[] );
  return (
    <div><h1><i>Student Data</i></h1><br/>
    <br/>
        <table>
            <thead><tr>
                <th>id</th><th>name1</th>
                <th>place</th>
                </tr>
            </thead>
            <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name1}</td>
              <td>{item.place}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
}
export default About;