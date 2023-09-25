import React, { useState,navigate} from 'react'
//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
const YahooBoot = () => {
  const [mail,setMail]=useState('')
  const submitHandler=(e)=>
  {
    e.preventDefault();
    if(setMail=="mail")
    {
      alert("checking")
     navigate('./footer')
    }
  }
  return (
    <div><div>
        <h1>YAhoo!!</h1>
        </div>
        <div>
        <div class="container">
  <div class="row">
    <div class="col-5" >
        <div className='purple'>
     
    </div></div>
    <div class="col-7">
    <form onSubmit={submitHandler}>
    <h2>Yahoo!</h2>
    <h2>Sign in</h2>
    <p>Using your yahoo account</p>
    <input type="email" placeholder="Username,email, or mobile" value={mail} onChange={(e)=>setMail(e.target.value)}/>
    <br/><br/>
    <label>
        <input type="checkbox" />
        Stay signedin
    </label><span>
    <a href="#">Forgot username?</a></span>
    <br />
    <input type="button" value="Create an account" />
    <br />
   
    <p>Or,continue with</p>

    <input type="button" value="Google"/>
    </form>
    </div>
  </div>
</div></div></div>

  )
}

export default YahooBoot