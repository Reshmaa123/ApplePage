
import React,{useState,useEffect} from "react";
import axios from "axios";

const Hookcrud=()=>{
const [data,setdata]=useState([]);
useEffect(()=>{
    axios.get(' http://localhost:4000')
    .then((res)=>{


       setdata(res.data);
    })
    .catch((error)=>
    {
        console.log("error");
    })
})

return(
    const=(())
    <div>
       <div>
            <h1>HELLO</h1>
                <table><thead>
                    <tr><th>id</th>
                    <th>name1</th>
                    <th>place</th></tr>
                    </thead>
                   
                    <tbody>
                        </tbody>{
                        this.state.posts.map((data)=>{
return(
                    
                <tr key={data.id}>
                    <td >{data.id}</td>
                    <td>{data.name1}</td>
                    <td>{data.place}</td>
                
                </tr>);  } )}   </table>   
                        
    
     </div>
     
    </div>
)}
export default Hookcrud