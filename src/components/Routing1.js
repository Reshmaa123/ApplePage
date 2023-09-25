import { Route,Routes } from "react-router-dom";
import Navigation from "./Navigation";
import ChooseUs from "./ChooseUs";
import React from "react";
const Routing1 = () => {
  return (
    <Routes>
        <Route path='/Navigation' element={Navigation}>
        <Route path='/ChooseUs' element={ChooseUs}/>
</Route>
    </Routes>
  )
}

export default Routing1