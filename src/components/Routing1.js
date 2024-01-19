import { Route,Routes } from "react-router-dom";

import React from "react";
import HOspitalparams from "./HOspitalparams";
import Params from "./Params";
const Routing1 = () => {
  return (
    <Routes>
        <Route path="" element={<HOspitalparams/>}/>
        
        <Route path="/Params/:id" element={<Params/>}/>
<Route/>
    </Routes>
  )
}

export default Routing1