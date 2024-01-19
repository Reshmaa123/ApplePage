import React from 'react'
import './Doctor.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from 'semantic-ui-react'
const HospitalHeader = () => {
  return (
    <div><div class="container-fluid">
        <div className='row header'>
            <div className='col-6'>
        <header><Icon name="mail"/>support @hospital.com     
        <span className='vertical' >Congini Hospitals</span>
        </header></div>
        <div className='col-6'>Call Now:823-567-567</div>
        </div></div>
        <div>
       
        <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
        </div>
    </div>
  )
}

export default HospitalHeader