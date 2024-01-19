import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FormInput, FormCheckbox, Form ,FormField,Checkbox,Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Sravansigin from './Sravansigin';
import SravanLogin from './SravanLogin';
const SravanApp = () => {
    
  return (
    <div>
       <h3>Sravan Hardware Page</h3>
Please do Visit Our place/Website<br/>
   <NavLink to="/SravanLogin"> <button>Login</button><br/><br/></NavLink>
 <NavLink to ="/Sravansigin">   <button>Sigin</button></NavLink>
    </div>
  )
}

export default SravanApp