import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Hospital2 from './Hospital post';
import Hospital from './Hospital put';
import DeleteHospital from './editHospital';
import DeleteHospital2 from './DeleteHospital2';
import AddPatient  from './AddPatient';
import RemovePatient from './RemovePatient';
import AddPatienttable from './AddPatienttable';
const HospitalHome = () => {
  return (
    <div>
<header>
    

<NavLink to={'/AddPatienttable'}>
<button>Enter Patient Details</button></NavLink>
        <button>Add Patient</button>
        
        
        <NavLink to ={'/RemovePatient'}>
<button>Delete Patient</button></NavLink>
<NavLink to={'/Hospital2'}>
<button >Edit patient</button></NavLink>
</header>

    </div>
  )
}

export default HospitalHome