import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
const AdminLogin=()=>{
    const [uname,setUname]=useState('')
    const [upswd,setPswd]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        if(uname==="Reshma" && upswd==="123456")
        {
            navigate('/Dashboard')
        }
        else{
            setError("Invalid credentials");
        }
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
        <input type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
        <input type="password" value={upswd} onChange={(e)=>setPswd(e.target.value)}/>
        <input type="submit" value="submit"/>
        </form>
        {error && <p id="error">{error}</p>}
        </div>
    )
    
}
export default AdminLogin