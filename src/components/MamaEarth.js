import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import './Mamaearth.css';
import { Breadcrumb } from 'semantic-ui-react';
import { Image, List } from 'semantic-ui-react';
import mamearth from './Images/mamearth.jpg';
import mama2 from './Images/mama2.webp';
import mamlogo from './Images/mamlogo.jpg'
const MamaEarth = () => {
  return (
    <div>
<div class="container">
    <div class="row header">
        <div class="col-5  ">
Asian's 1st Brand with MADE SAFE Certified Products
        </div>  <div class="col-7">
            Shop For $20 and Get a Green Tea Face Serum FREE worth $25!SHOP NOW!!
        </div>
    </div>
    <div class="row">
        <div class="col-6">
<img src={mamlogo} alt="" width="25%"className="mt-0"/>
<input type="text"  placeholder="Searh for Face mask"/>

        </div> 
         <div class="col-2">
            <p className="border">Become a Goodness insider for <span>
            exclusive offers   </span></p>
            
        </div>
        <div class="col-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-dash" viewBox="0 0 16 16">
  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg><span>cart</span>
        </div>
        <div class="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg><span>Login</span>
        </div></div>
        
  
    <div class="container">
        <div class="row">
            <div class="col">
        <List celled horizontal className="nostyle">
    <List.Item>About Us</List.Item>
    <List.Item>Beauty</List.Item>
    <List.Item>Support</List.Item>
    <List.Item>About Us</List.Item>
    <List.Item>Contact</List.Item>
    <List.Item>Support</List.Item>
    <List.Item>About Us</List.Item>
    <List.Item>Contact</List.Item>
    <List.Item>Support</List.Item>
    <List.Item>About Us</List.Item>
    <List.Item>Contact</List.Item>
  </List>

</div>
        
</div></div>
<div>
    <img src={mamearth} alt="" width="100%" height=""/>
    </div>
<div>
<div class="row">
    <div class="col-3">
<b className="bold">BEST SELLERS</b>
<p className="word">Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin,
     hair, and baby care journey.</p>
     <button type="button" className="btn btn-info">VIEW ALL</button>
    </div>
    
    <div class="col-9">
    
  <div class="my-card cardslice">
    
  <img src={mama2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>

</div>



    


  <div class="my-card">
    
  </div>

  <div class="my-card">3</div>

  <div class="my-card">5</div>

  <div class="my-card">6</div>

</div>
</div>

    </div>
</div>
<div>
    hjk
</div>
</div>

</div>


    
  




    
  )
}
export  default MamaEarth