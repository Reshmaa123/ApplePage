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
                <div class="col">1</div><div class="col"></div>
                <div class="col">1</div><div class="col"></div>
                <div class="col">1</div><div class="col"></div>
                </div></div>
                </div>)
                }
                export default Facebook
