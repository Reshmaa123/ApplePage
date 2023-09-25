import React from 'react'
import { useMemo } from 'react';
const UseMemo = () => {
    const a =5;
    const b =6;
    const calculateSum = (a, b) => {
        console.log('Calculating sum...');
        return a + b;}
    const sum=useMemo(()=>calculateSum(a,b),[a,b]);
    
  return (
    <div>
        <p>value ofa:{a}</p>
        <p>value of b:{b}</p>
        <p> sum:{sum}</p>

    </div>
  )
}

export default UseMemo