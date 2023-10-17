import React from 'react'
import hireme from './Images/hireme.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import download from './download';
import girl from './Images/girl.jpg';
import  bgportfolio  from './Images/bgportfolio.jpg';
import './reshma.css';
const  Portfolio = () => {
  return (
    <div className="bg">
    
    <div className="body">

        <header>
            <div className="container">
                <nav class="flext items-centre justify-between">
                <div class="left flex justify-right">
                    <div className="row ">
                        <div className="col-3 logo">
                        
</div>
                  
<div className="col-6 head">
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">AboutUs</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">My Work</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Ping Me</a>
  </li>
</ul>
</div>
<div className="col-3">
    
      
         </div>
                    
                
</div>
            </div>
            </nav></div>
        </header>
        <section className="about">
<div className="container flext items-center">
<div className="left-flex">
    <img src={girl} alt=""/>
</div>

</div>
<div className="right-flex">
    <h3 className="font">RESHMA AKKALI</h3>
    <h4>I'M A FRONT-END</h4>
    <p className="blue">DEVELOPER</p>
    <p><h3> Having 6 + years of experience in Ui.Hands on Experience in Creating web Pages.Can prepare Single page applictions by using React.
        Can easily use some important elements like Nav Bar,Alert,Buttons,Modals etc...
        </h3>
    </p>
<button className="btn-btn-info">Download CV</button>
</div>



</section>
</div>
    </div>
  )
}

export default Portfolio