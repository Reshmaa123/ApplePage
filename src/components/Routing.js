import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Hospital2 from './Hospital post';
import editHospital from './editHospital';
import HospitalHome from './HospitalHome';
import DeleteHospital from './editHospital'; 
import DeleteHospital2 from './DeleteHospital2';
import EditHospital2 from './EditHospital2';
import  AddPatient  from './AddPatient';
import RemovePatient from './RemovePatient';
//import Hospital from './Hospital put';
import AddPatienttable from './AddPatienttable';
const Routing=()=>
 {
  return (
    <div>
  
        <Routes>
         <Route path="/Hospital2" element ={<Hospital2/>}/>
         <Route path="/EditHospital2/:sno" element={<EditHospital2/>}/>
         <Route path="/AddPatienttable" element={<AddPatienttable/>}/>
          <Route path="/AddPatient" element={<AddPatient/>}/>
        
            
          
<Route path="/RemovePatient" element={<RemovePatient/>}/>
          

         
        
        </Routes>
       
    </div>
  );
}

export default Routing