import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
const Portfolio1 = () => {
  return (
    <div className="black">
        <header className="back">
<div className="container ">
    <div className="row">

        <div className="col-2 whitetext">UI DEV</div>
        <div className="col-10">
        <nav  aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">About</a></li>
    <li class="breadcrumb-item active"><a href="#">Services</a></li>
    <li class="breadcrumb-item"><a href="#">MyWork</a></li>
    <li class="breadcrumb-item"><a href="#">ContactMe</a></li><br/>
    <button>CALL ME</button>
  </ol>
</nav>
<i class="fa fa-car">f</i>       
</div>
    </div>
</div>
        </header> 
        <div>
         <div className="row">
          <div className="col black">
            <h3 >Front End Developer</h3>
<h3>Hey!!
  
<br/>I AM RESHMA AKKALI </h3>
<p> Am Frontend Based Software Developer & Expert  in
  Web application
</p>
<button>HIRE ME</button>
<Icon>star</Icon>
<i class="fa-regular fa-heart"></i>n
<i class="fa fa-car"></i>
<h6>
              da
            </h6>
        
          </div>
          <div className="col">
           
          </div>
         </div>
        </div>
    </div>
  )
}

export default Portfolio1