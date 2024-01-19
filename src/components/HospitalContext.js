import React, { createContext,Component } from 'react'
import AdminLogin from './Admin'

const HospitalContext = (Comp) => {
    return(
    class HospitalContext extends Component
    {
        constructor(props){
            super(props)
            this.state={
                login:true
            }
        }
    
render(){
  return (

    (this.state.login)?
    <Comp/>:<AdminLogin/>

  )
}}
)}
export default HospitalContext