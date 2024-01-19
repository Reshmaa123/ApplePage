import React from 'react'
import { useState } from 'react'
import './allcolors.css'
const Allcolors = () => {
const [color,setColor]=useState('olive')

  return (
    <div>
        <div style={{backgroundColor:color}}>
        <button onClick={()=>setColor("red")}>red</button>

        <button  onClick={()=>setColor("green")}>green</button>
        <button  onClick={()=>setColor("pink")}>blue</button></div>
        </div>
  )
}

export default Allcolors