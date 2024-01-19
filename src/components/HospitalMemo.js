import React, { useMemo } from 'react'
import { useState } from 'react'
const HospitalMemo = () => {
const [counter,setCounter]=useState(1)
const [number,setNumber]=useState(6)
const factorial=useMemo((num)=>{
return fact(number)},
[number])

  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Counter</button>
<h2>Factorial:{number}it is :{factorial}</h2>
<button onClick={()=>setNumber(number+1)}>Factorial</button>
    </div>
  )
}
export default HospitalMemo
function fact(num){
    let res=1;
    for(let i=num;i>=1;i++){
        res=res*num
    }
    console.log(res)
    return res;
}