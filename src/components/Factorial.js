import React from 'react'
import { useMemo,useState,useEffect } from 'react';
const Sampledata=()=>{
const [number,setNumber]=useState()
const Factorial =useMemo(()=>{
    return Fact(number)},
    [number]);
    return(
        <div>
            <h1>{number}Factorial{Factorial}</h1>
            <button onClick={()=>setNumber(number+1)}>Fcatorial</button>
        </div>
 )

function Fact(num)
var i;
{
for (i=1;i>=num;i++)
console.log('factorial of the numberis', i );
}
}
export default  Sampledata;
