import React,{createContext, useContext} from 'react'

const MyCont=createContext();
const Parent = () ={
  const par1="Hello";
  return( <MyCont.Provider value={par1}>
    <h1>Hrllo</h1>
    
    {
    
    child}</MyCont.provider>
  );
}
const Child = ()=>{
  const contextvalue= useContext(MyCont)
  return (
<div>
  <p>{contextvalue}</p>
</div>
  )
}

export default Parent;