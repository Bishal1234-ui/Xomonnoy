import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



function Navbar() {
  const {logout} = useAuth0();

  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-logo-png&psig=AOvVaw0jrH2u5rlrFeoatROtFX2N&ust=1678948422932000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMjwmbSo3f0CFQAAAAAdAAAAABAE"} alt="Logo" />
      </div>
      <div className={"menuIcon"}>
         <ul className="navbar-list">
           <li>
             <NavLink to="/home">Home</NavLink>
             </li>
             <li>
             <NavLink to="/profile">Profile</NavLink>
             </li>
             <li>
             <NavLink to="/rmMemories">ReminiscingMemories</NavLink>
             </li>
             <li>
             <NavLink to="/login">Admin Dashboard</NavLink>
             </li>
             <li>
             <button onClick={() => logout({logoutParams:{returnTo:window.location.origin}})}>Log Out</button>
             </li>


           
              
           </ul>
           </div>
    </nav>
  );
}

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const navbar = () => {

//   return (
//     <nav>
//       <div className={"menuIcon"}>
//         <ul className="navbar-list">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           </ul>
//           </div>
//     </nav>
//   );
// };

// export default navbar;
{/* <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Profile</a>
        
      </div> */}