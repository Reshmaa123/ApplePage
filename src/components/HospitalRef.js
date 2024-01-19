import React, { useEffect } from 'react'
import { useRef } from 'react'
const HospitalRef = () => {
    const  reference=useRef(0)
    useEffect(()=>{
        reference.current.focus()
    })
    const changeAct=()=>{
        reference.current.value++;
        reference.current.focus()
    }
  return (
    <div>
        <input type="text" ref={reference} />
    <button onClick={changeAct}
    >+</button>

    </div>
  )
}

export default HospitalRef