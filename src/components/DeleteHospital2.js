import React from 'react'
import { useParams } from 'react-router-dom'

const DeleteHospital2 = () => {
    const {id}=useParams()
  return (
    <div>
        EditStudents - {id}
    </div>
  )
}

export default DeleteHospital2