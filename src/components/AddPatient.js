import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'jquery/dist/jquery';
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables'
const AddPatient =()=>{
const[id,setId]=useState('')
const[name1,setName1]=useState('')
const[place,setPlace]=useState('')
const[data,setData]=useState([])
 
  useEffect(()=>{
    axios.get(`http://localhost:4000/student/${id}`)
    .then((response)=>{
    setData(response.data);
    console.log(response.data)
    })

.catch((error)=>{
    alert(error);
})

setTimeout(()=>{
$('#table').DataTable();},10000)
},[id]);
  return (
    <div>
      <table id="table" class="display">
        <thead><tr>
    <th>id</th>
    <th>patient</th>
    <th>description</th></tr>
</thead>
    <tbody>
        {data.map((student)=>{
    return(
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name1}</td>
            <td>{student.place}</td>
</tr>
)})}
    </tbody>
</table>     
        
        
        </div>
  )
}

export default AddPatient