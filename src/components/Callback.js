import React, { useCallback, useState } from 'react'

export const Callback = () => {
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        console.log("Button Clicked");
    }
    const memhandleClick=useCallback(()=>{
       setCount('Button  Clicked');
    },[]);

    
  return (
    <div>
    <p>count:{count}</p>
    <button onClick={memhandleClick}>Click</button>click</div>
  )
}
