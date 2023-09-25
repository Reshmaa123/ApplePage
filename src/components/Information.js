import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import About from './About'
import Slidebad from './slidebad'
import './main.css'
import PostData from './PostData'
import DeleteData from './DeleteData'
import Edit from './Edit'
const Information = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3" >
           <Slidebad/>
            </div>
            <div className="col-md-9">
       <Outlet/>
                </div>
        </div>
         
    </div>
  )
}

export default Information