import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import PostData from './PostData'
import { Button } from 'semantic-ui-react'
import Edit from './Edit'
import DeleteData from './DeleteData'
const Slidebad = () => {
  return (
    <div>
       <ul>
    <li><NavLink to="/">About</NavLink>
    </li> <li><NavLink to="PostData ">PostData</NavLink>
    </li> <li><NavLink to="DeleteData">DeleteData</NavLink>
    </li> <li><NavLink to="Edit">Edit</NavLink>
    <li>
      <NavLink to="Wrongpage">wrongpage</NavLink>
    </li>
    </li>
   
    </ul></div>
  )
}

export default Slidebad