import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SravanApp from './SravanApp'
import Sravansigin from './Sravansigin'
import SravanLogin from './SravanLogin'
const Routing3 = () => {
  return (
    <Routes>
        <Route path="/SravanApp" element={<SravanApp/>}/>
   <Route path="/SravanLogin" element={<SravanLogin/>}/>
   <Route path="/Sravansigin" element={<Sravansigin/>}>
    </Route>
    </Routes>
  )
}

export default Routing3