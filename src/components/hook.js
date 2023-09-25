import React,{useState,component,useEffect} from "react";
const Hook1=()=>{
    const [name,setName]=useState('element')
   const [counter,setCounter]=useState(0)
    useEffect(()=>{
document.title=`you have clicked ${counter} times`;

    } );
return(
        <div>
<h1>{name} </h1>
<button onClick={()=>setName('Reshma')}>
click</button>
<h1>{counter} </h1>
<button onClick={()=>setCounter(counter+1)}>
Increase Counter</button>

</div>
    )
    }
export default Hook1