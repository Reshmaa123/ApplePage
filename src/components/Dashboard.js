import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ChooseUs from './ChooseUs';
const Dashboard = () => {
    const [uname,setUname]=useState('');
    const [pwd,setPwd]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
    if (uname=== `Reshma`&& pwd=== `123456`)
    {
    navigate ('/ChooseUs');
}
else
{
   setError('Invalid Credentials');
}}
  return (
    <div>
<form onSubmit ={submitHandler}>
    <input type="text"  value={uname} onChange={((e)=>setUname(e.target.value))}/>
    <input type="text"  value={pwd} onChange={((e)=>setPwd(e.target.value))}/>
    <input type="submit"  value="submit"/>

    </form>
   {error && <p id="error"> {error} </p>}
   </div>
   )
   
}
export default Dashboard