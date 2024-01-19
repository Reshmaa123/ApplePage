import React,{useState} from 'react'
const Password = () => {
const[pswd,setPswd]=  useState('')  
function generatePassword(){
    const length=8,
     charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
 newPswd ='',
    for(let i=0;i<length;i++);
    {
        newPswd +=charset.charAt(Math.floor(Math.random()*charset.length))
    }
    setPswd(newPswd);
}                                                                                                             
  return (
    <div>
<h1>Pasword Generator</h1>
<button onClick={generatePassword}>PASSWORD GENERATOR</button>
<input type="text" value={Password} readOnly>

</input>




    </div>
  )
}

export default Password