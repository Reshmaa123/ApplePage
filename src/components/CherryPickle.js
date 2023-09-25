import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './main.css'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
//import { Carousel } from 'semantic-ui-react';
const CherryPickle = () => {
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
</div>
<div class="container"  className="justify">
    <div class="row">
        <div class="col-5" >
            <img src="https://www.samudrapumps.com/Images/logo.png" class="rounded float-start" alt=""/>
</div>
        <div class="col-7" >

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    </nav></div></div></div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Disabled</a>
      </li>
    </ul>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>
       
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.samudrapumps.com/Images/slide_1.jpg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="https://www.samudrapumps.com/Images/slide_new.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.samudrapumps.com/Images/slide3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="https://www.samudrapumps.com/Images/slide1.jpg" alt="Los Angeles">
    </div>

    <div class="item">
      <img src="https://www.samudrapumps.com/Images/slide3.jpg" alt="Chicago">
    </div>

    <div class="item">
      <img src="ny.jpg" alt="New York">
    </div>
  </div>

 
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>



<div>

<Carousel>
      <Carousel.Item>
        <img
          src="https://www.samudrapumps.com/Images/slide_new.jpg"
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.samudrapumps.com/Images/slide3.jpg"
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://example.com/image3.jpg"
          alt="Image 3"
        />
      </Carousel.Item>
    </Carousel>








</div>



  </div>




        
    
  )
}

export default CherryPickle