import React from 'react'
import './main2.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown } from 'semantic-ui-react';
const Cards = () => {
  return (
    
       <div className="center">
       <div className="container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      
<div className="row">
  <div className="col-lg-4" ><img src="https://tse4.mm.bing.net/th?id=OIP.Vy5PUdCk1nZpeE31MCa1pwHaHa&pid=Api&P=0&h=180" class="d-block w-100" alt="..."/>
  </div>  <div className="col-lg-4" ><img src="https://tse2.mm.bing.net/th?id=OIP.B4Z-NSk48VLIGdXai5FSVAHaEo&pid=Api&P=0&h=180" class="d-block w-100" alt="..."/>
  </div>  <div className="col-lg-4" ><img src="https://tse3.mm.bing.net/th?id=OIP.g4lxK6-bKsLBwbvL8bRSYAHaHd&pid=Api&P=0&h=180"  class="d-block w-100" alt="..."/>
</div>
</div>
      <div className="carousel-item">
    <div className="row">
  <div className="col-lg-4" >
    <img src="https://tse1.mm.bing.net/th?id=OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa&pid=Api&P=0&h=180" class="d-block w-10" alt="..."/>
  </div>  <div className="col-lg-4" ><img src="https://tse1.mm.bing.net/th?id=OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa&pid=Api&P=0&h=180" class="d-block w-10" alt="..."/>
  </div>  <div className="col-lg-4" ><img src="https://tse1.mm.bing.net/th?id=OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa&pid=Api&P=0&h=180" class="d-block w-10" alt="..."/>
  </div></div>
    </div>
    <div className="carousel-item">
      
    <div className="row">
  <div className="col-lg-4" ><img src="https://tse4.mm.bing.net/th?id=OIP.Vy5PUdCk1nZpeE31MCa1pwHaHa&pid=Api&P=0&h=180" class="d-block w-100" alt="..."/>
  </div>  <div className="col-lg-4" ><img src="https://tse2.mm.bing.net/th?id=OIP.B4Z-NSk48VLIGdXai5FSVAHaEo&pid=Api&P=0&h=180" class="d-block w-100" alt="..."/>
  </div>  <div className="col-lg-4" ><img src="https://tse3.mm.bing.net/th?id=OIP.g4lxK6-bKsLBwbvL8bRSYAHaHd&pid=Api&P=0&h=180"  class="d-block w-100" alt="..."/>
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
    </div></div>
    <div>
    <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div>
<Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' description='ctrl + o' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Dropdown.Item text='Make a copy' />
      </Dropdown.Menu></Dropdown>
</div>
    </div>
    <div>
    <select  class="form-select form-select-lg mb-3"   aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

    </div>
    </div>
  )
}

export default Cards