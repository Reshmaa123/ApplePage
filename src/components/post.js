import React,{useState,useHistory} from "react";
import axios from "axios";

const Poststud=()=>{
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
}
return(
    <form>
        <input type="text" placeholder="id" value={id} onChange={(e)=>setId(e.target.value)}/>
        <input type="text" placeholder="name1" value={name1} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="place" value={place} onChange={(e)=>setPlace(e.target.value)}/>
        <input type="button"  onClick={submitHandler} value="submit"/>
    </form>
)
}
export default Poststud
