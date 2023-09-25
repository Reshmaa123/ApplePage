import React from "react";
 import 'bootstrap/dist/css/bootstrap.min.css'
import path from'./Images/phone.jpg'
import styles from 
'./mystyle.module.css'
const Styling = () => {
  return (
    <div className="container-fluid">
<div className="row bg-danger">
    <div className="col-md-3">
heleo
    </div><div className="col-md-3 text-danger">
        Hello2
    </div><div className="col-md-3 ">
        Hello3
        </div><div className="col-md-3">
        Hello4
        </div>
</div>

<div className="container-fluid 0" > 
    <div >
        
    </div>
</div>
<div className="container-fluid">
  <div class="row">
    <div class="col-md-3"><h1> SHOP!!</h1>
    <ul class="list-inline">
    
  <li class="list-inline-item">Phones</li><br/>
  <li class="list-inline-item">Tablets</li><br/>
  <li class="list-inline-item">Devices</li><br/>
  <li class="list-inline-item">HotSpots& More</li><br/>
  <li class="list-inline-item">Accessories</li><br/>
</ul>
    </div>
    <div class="col-md-2 "><div className="box-shadow">
    <div >
        <h4>See 2 deals</h4>
        <img src={path} alt="Phones"></img>
        <h6>One Plus</h6>
        <h1>Nord N30 5G</h1>
        <p>Starting at</p>
        <b>Montly <span> $0 </span></b>
        <br/>for 24 months
        <div class="d-flex height: 200px">
  <div class="vr">
    heelo
  </div>
  
</div>

    </div></div></div>
    <div class="col-md-2"><div className="box-shadow">
    
    <div >
        <h4>See 2 deals</h4>
        <img src={path} alt="Phones"></img>
        <h6>One Plus</h6>
        <h1>Nord N30 5G</h1>
    </div></div></div>
    <div class="col-md-2"><div className="box-shadow">
    <div >
        <h4>See 2 deals</h4>
        <img src={path} alt="Phones"></img>
        <h6>One Plus</h6>
        <h1>Nord N30 5G</h1>
    </div></div></div>
    <div class="col-md-2 ">
        <div className="box-shadow">

        <h4>See 2 deals</h4>
        <img src={path} alt="Phones"></img>
        <h6>One Plus</h6>
        <h1>Nord N30 5G</h1>
    </div></div>
    </div>
    </div>
  
  <button className="btn-btn-warning">Redas</button>
<p className={styles.abcd}>Thi sis my moodile paragraph</p>
  </div>

    
  );
}

export default Styling
