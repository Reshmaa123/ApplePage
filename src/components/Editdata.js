import { Navigate } from "react-router-dom";
import React,{useState,useEffect,useNavigate} from "react";
import axios from "axios";
import { useParams,NavLink } from "react-router-dom";
const Editdata =()=>{
const [id,setId]=useState('')
const [name1,setName1]=useState('')
const [place,setPlace]=useState('')
const{sno}=useParams()
const [data,setData]=useState('')
const navigate=useNavigate()

useEffect(()=>{
    setId(sno);
    axios.get(`http://localhost:4000/${sno}`)
    .then((res=>{
setId(res.data.id);
setName1(res.data.name1);
setPlace(res.data.place);
    }))
    .catch((error)=>{
        console.log("error");
})},[sno]);
const submitHandler=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:4000${id}`,{id,name1,place})
    .then(res=>{
        alert("data uploaded");
       //navigate("/http://localhost:4000")
    }
       )
        .catch((error)=>{
            console.log(error);
        }
        )
    }
 return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Id" value={id} onChange={(e)=>setId(e.target.value)}/>
                <input type="text" placeholder="name" value={name1} onChange={(e)=>setName1(e.target.value)}/>
                <input type="text" placeholder="place" value={place} onChange={(e)=>setPlace(e.target.value)}/>
                <input type="submit" value="update"/>
</form>
                <table><thead>
                    <tr><th>id</th>
                    <th>name1</th>
                    <th>place</th></tr>
                    </thead>
                   
                    <tbody>
                        {data.map((item)=>
                        (
                        
                            <tr key={item.id}>
                    
                    <td >{item.id}</td>
                    <td>{item.name1}</td>
                    <td>{item.place}</td>
                    </tr>))}
</tbody>; 
                 </table>   
                    </div>
)}
export default Editdata;
