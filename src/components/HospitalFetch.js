import React from 'react'
import useCustomFetch from './CustomFetch.js'
const HospitalFetch = () => {
    const data=useCustomFetch( ' http://localhost:4000/student')
    const data2=useCustomFetch(  'http://localhost:4000/student')
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                </tr></thead>
                <tbody>
                    { 
                    data.map((student)=>(
                    
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td></tr>
                        )
                        ) }
                    
                    
                </tbody>
            
        </table>
<h1>Second</h1>
<table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>place</td>
                </tr></thead>
                <tbody>
                    { 
                    data2.map((student)=>(
                 
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.place}</td></tr>
                        ))
                         } 
                    
                    
                </tbody>
            
        </table>

    </div>
  )
}

export default HospitalFetch