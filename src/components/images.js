import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import path  from './Images/spi.jpg'
const Images=()=> {
  return (
    <div className="container-fluid  ">
        <div className="row">
           
            <div className="col-md-3">
            <div className="box-shadow">
<img src={path} alt="imae"></img>
<h2>spider</h2>
            </div></div>
            <div className="col-md-3 "><div className="box-shadow">
            <img src={path} alt="Spider"/>
           <h2>spider</h2>
            </div></div>
            <div className="col-md-3"><div className="box-shadow">
            <img src={path} alt="ima"/><h2>spider</h2>
         </div>
           </div>
                <div className="col-3"><div className="box-shadow">
                <img src={path} alt="ie"/><h2>spider</h2>
                </div></div>
        </div>
    </div>
  );
}
export default Images
