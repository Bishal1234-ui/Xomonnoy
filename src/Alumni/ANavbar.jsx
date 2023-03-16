import React from 'react'
import './ANavbar.css'
import { NavLink } from 'react-router-dom';
const ANavbar = () => {
  return (
    <nav className="navbar">
      
    <div className="navbar-logo">
      <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-logo-png&psig=AOvVaw0jrH2u5rlrFeoatROtFX2N&ust=1678948422932000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMjwmbSo3f0CFQAAAAAdAAAAABAE"} alt="Logo" />
    </div>
    <div className={"menuIcon"}>
       <ul className="navbar-list">
         <li>
           <NavLink to="/home">Logout</NavLink>
           </li>
           <li>
           <NavLink to="/profile">Profile</NavLink>
           </li>
           <li>
           <NavLink to="/compose">Compose</NavLink>
           </li>


         
            
         </ul>
         </div>
  </nav>
  )
}

export default ANavbar
