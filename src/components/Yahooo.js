import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Yahooo=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate=useNavigate();
const handleSubmit=(e)=>
{
    e.preventDefault();
    if(email==="youryahoo@gmail.com"&&password==="your.yahoo.password")
    {
        alert("sucess")
    navigate('./yahooBoot')
    }
    else{
        alert("failed")
    }}
    return(
        <div className="container">
            <h2>YahooLogin</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} placeholder="enter the emai" onChange={(e)=>setEmail(e.target.value)}/>
                <br/><input type="password" value={password} placeholder="enter the password" onChange={(e)=>setPassword(e.target.value)}/>
                <br/><input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Yahooo