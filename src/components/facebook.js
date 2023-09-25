import React, { useState } from 'react';
import './style.css'
const Facebook = () => {
    const [email,setEmail]=useState('');
    const [pswd,setPswd]=useState('');
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    };
    const handlePswdChange=(e)=>{
        setPswd(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Email:',email);
        console.log('Pswd:',pswd)
    }
return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-4">1</div><div class="col-4">
        <form class="ui form" onSubmit={handleSubmit}>
  <div class="field">
    <label>First Name</label>
    <input type="Email" name="first-name" placeholde="Email or Phone number" value={email} onChange={handleEmailChange} />
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="password" name="last-name" placeholder="Password" value={pswd} onChange={handlePswdChange}/>
  </div>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden"/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button class="ui button" type="submit">Submit</button>
</form></div>
<div class="col-4">hello</div>
    </div></div>
    </div>
  )
}

export default Facebook