import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './main.css'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './main.css'
import {Dropdown,Menu} from 'semantic-ui-react';
const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]
const CherryPickledemo = () => {
    return (
      <div>
  <div  class="container" className="header">
  <div class="row">
      <div class="col">
      <Icon name='call'/> Dealership Enquiries: Mr. Dilipkumar +91 73050 74120 - Timings: (10 am to 4 pm)
      </div>
      <div class="col">
          <Icon name="facebook"/>
          <Icon name= "linkedin"/>
          <Icon name="instagram"/>
          <Icon name="whatsapp"/>
          <Icon name="twitter"/>
          <Icon name="pinterest p"/>
          <Icon name="youtube"/>
      </div>
  </div>
  
  <div class="container"  className="justify">
    <div class="row">
        <div class="col-5" >
            <img src="https://www.samudrapumps.com/Images/logo.png" class="rounded float-start" alt=""/>
</div>
        <div class="col-7" >
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">AboutUs</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/">Action</a>
          <a class="dropdown-item" href="#">Another action</a></div>
          <div class="dropdown-divider">
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Testimonials</a>
      </li>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Action">Action</a>
          <a class="dropdown-item" href="Anotheraction">Another action</a>
          <div class="dropdown-divider">
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      <li class="nav-item">
        <a class="nav-link " href="#">News</a>
      
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Languages
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/">hello</a>
          <a class="dropdown-item" href="/">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/">Something else here</a>
          <li class="nav-item">
        <a class="nav-link " href="#">Service</a></li>
        </div>
        </li>
      </li></div>
   </ul> </div>
 </nav>
   </div>
   </div>
    
</div>
</div>
<div >

    </div>
    <div>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div>
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="Los Angeles" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Chicago" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="New York" class="d-block w-100"/>
  </div>
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div> </div>
</div>
<div class="container">
  <div class="row">
    <div class="col">
      <h2>Vision</h2>
      <p>To be a global engineering icon

by putting people first

& giving back to society.</p>
    </div><div class="col">
      <img src="https://www.samudrapumps.com/Images/mission-logo.png" alt=""/>
    </div><div class="col"><h2>Mission</h2>
    <p>Delivering exceptional products and services

by creating long term, sustainable partnerships

& generating stakeholder value</p>
    </div>
  </div>
</div>
<div>
  <div class="container">
    <h2>OUR MANTRA</h2>
    <p><h3>Success through Advanced, Manufacturing excellence by Understanding our customers &
       Developing sustainable Relationships to create Amazing products and services!</h3></p></div>
       
<div>

<div id="demo" class="carousel slide" data-bs-ride="carousel">

<div>
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://www.samudrapumps.com/Images/slider_one.jpg" alt="Los Angeles" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Chicago" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="New York" class="d-block w-100"/>
  </div>
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div> </div>
</div>
</div>
</div>
<div class="aboutus">
  <h2 className="about">AboutUs</h2>
  <p>Samudra is headquartered in Singapore with manufacturing capabilities in Coimbatore, India. With strong roots in industrial design and discreet manufacturing of pumps and motors, Samudra’s strength lies in its core management team that has over 250 years of combined technical and commercial experience in the industry.

Samudra’s initial strategy is to first launch its agricultural and domestic range to meet the needs of the farmer and the domestic market, through focus on latest technologies that ensure high pump efficiency, greatest flow rate and ease of installation, maintenance and service. Samudra, is to soon follow this up with a complete range of Industrial and Commercial products; like Back Pull-Out pumps and Hydro Pneumatic Pressure Booster Systems.

We strive to be as innovative as possible, while providing the highest value to our customers. We are not afraid to push boundaries while remaining prudent and careful in our approach.

</p>
</div>
<div>
  <div class="container" className='blue'>
    <div class="row" >
      <div class="col-9" ><article>
     <h2>Leadership at Samudra</h2>
Samudra is spearheaded by Mr. Shivan Ramachandran (ex. Joint MD of Texmo Industries), in his previous tenure he was responsible in developing some of the most lauded products in the industry. He has been instrumental in the establishment of several new factories, spanning over 250,000 sq. ft of manufacturing space.

He strongly believes in the importance of R&D and constant innovation having implemented some of the newest technologies in hydraulic design, RPT (Rapid Prototyping Technologies) including pioneering the use of 3D printing, implemented lean manufacturing systems including several Industry 4.0 tools and creating strategic JV with several global technology companies.

By leveraging his deep insight into market dynamics, Shivan has chalked out a robust growth strategy for Samudra keeping in tune with the market need. His vision is for Samudra to be a leading player in the hydraulics segment by offering top quality pumps and motors catering to varied needs.
Without a hands-on approach you cannot be successful in this business. Samudra believes in creating partnerships with its dealers, providing value to its customers and empowering its workforce to create the best in-class products and an efficient aftersales service experience. I believe this to be the winning formula for Samudra!"

- Shivan Ramachandran.
 </article>
  </div>
<div class="col-3"><img src="https://www.samudrapumps.com/Images/leader.jpg" alt=""/>
<span><h4>AVAKAY RAO</h4>
  <p>CEO EXecutive</p>
</span>
  </div>
</div>
</div>
 </div>
 <div>
 <div class="center" className="gridc">
  <div class="container">
 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <img src="https://tse3.mm.bing.net/th?id=OIP.7acp2NExpYoVMo6rbOUYNQHaHS&pid=Api&P=0&h=180" alt=""/>
            </div><div class="col-lg-4">
              <img src="https://tse1.mm.bing.net/th?id=OIP.PNjR6EzMGYyoHrkdED_6lQHaHa&pid=Api&P=0&h=180" alt=""/>
              </div><div class="col-lg-4">
              <img src="https://tse2.mm.bing.net/th?id=OIP.vKOPdbeCuniGdOjP8wziLQHaFU&pid=Api&P=0&h=180" alt=""/>
            </div><div class="col-lg-4">
              </div>
        </div>
      </div>
   
    <div class="carousel-item">
    <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <img src="https://tse2.mm.bing.net/th?id=OIP.G6FBL1T-F_BZthqbdMmR5AHaEJ&pid=Api&P=0&h=180" alt=""
            class="d-block w-100" />
            </div><div class="col-lg-4">
              <img src="https://tse1.mm.bing.net/th?id=OIP.PNjR6EzMGYyoHrkdED_6lQHaHa&pid=Api&P=0&h=180"  class="d-block w-100"  alt=""/>
              </div><div class="col-lg-4">
              <img src="https://tse2.mm.bing.net/th?id=OIP.vKOPdbeCuniGdOjP8wziLQHaFU&pid=Api&P=0&h=180"   class="d-block w-100" alt=""/>
            </div><div class="col-lg-4">
              </div>
        </div>
      </div>
    </div>     
    </div>
    <div class="carousel-item">
    <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <img src="https://tse2.mm.bing.net/th?id=OIP.vKOPdbeCuniGdOjP8wziLQHaFU&pid=Api&P=0&h=180" alt=""/>
            </div><div class="col-lg-4">
              <img src="https://tse1.mm.bing.net/th?id=OIP.PNjR6EzMGYyoHrkdED_6lQHaHa&pid=Api&P=0&h=180" alt=""/>
              </div><div class="col-lg-4">
              <img src="https://tse2.mm.bing.net/th?id=OIP.vKOPdbeCuniGdOjP8wziLQHaFU&pid=Api&P=0&h=180" alt=""/>
            </div><div class="col-lg-4">
              </div>
        </div>
      </div>
    </div>
</div>
</div>
   

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
</div>
<p>
<marquee width="60%" direction="left" height="100px" onmouseover="this.stop();" onmousestop="this.start();"
>
This is a sample scrolling text that has scrolls in the upper direction.
</marquee>
</p>
<div>
<div className="container">
  <div className="row">
    <div className="col">
<iframe  src="https://www.youtube.com/embed/JOdpkAJVub0?si=PqptP-Hb5o3Ji3Qb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
 encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<div className="col">
<iframe  src="https://www.youtube.com/embed/JOdpkAJVub0?si=PqptP-Hb5o3Ji3Qb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
 encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
  </div></div></div>

<div>
  <div className="container">
  <div className="row">
    <div className="col-6">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.4136577143404!2d-75.39297812429952!3d40.08848927555232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6944ab30b8765%3A0x21c6a02d866542a5!2sKing%20of%20Prussia!5e0!3m2!1sen!2sus!4v1694643824932!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"></iframe>
     <p>
      <h2>King Of Purssia</h2>
      Lafayette valley forge
      e block;;Registered Office: Block 1, Ground Floor, Senthil Towers, 1078 Avinashi Road, Coimbatore - 641 018, Tamilnadu, India.

Tel.+91 422 498 22 55
Email. info@samudrapumps.com
     </p>
</div>
  <div className="col-6">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7622.3528744846435!2d78.61646514096982!3d17.210227983081534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba705953c1f27%3A0x1d6a650e4f6bafb!2sSheriguda%2C%20Telangana%20501510%2C%20India!5e0!3m2!1sen!2sus!4v1694645444347!5m2!1sen!2sus" width="600" height="450"
  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <p><h2>Sheriguda</h2>
  My Happy place
  sheriguda village,Ibrahimpatnam
  1 Keong Saik Road, Unit 10 – The Working Capitol,
Singapore 089109
My Happy place
  sheriguda village,Ibrahimpatnam
  1 Keong Saik Road, Unit 10 – The Working Capitol,
Singapore 089109
Tel. +65 6813 2111
Email. info@samudra.net
  </p>
    </div>
  </div>
</div>
</div>
<div class="flex">
  <div className="container">
      <div classname="flex">
      <div className="row">
        <h3 className='top'>Contact us</h3>
        <div className="col-6">
    
      Department *
    </div>
   <div className="col-6">
   <select  class="form-control custom-select" className="box" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option >One</option>
  <option >Two</option>
  <option >Three</option>
</select>
            </div>
    </div></div></div>
    </div><br/>
<div className="row">
  <div className="col">
d
  </div>
  <div className="col">
    f
  </div></div>
  <div class="footer">

<h4 className="footer">
  BEST PUMPS AND MOTORS
</h4>

</div>
 
 
    





</div>



)
}

export default CherryPickledemo