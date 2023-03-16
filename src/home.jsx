import React from 'react'
import { Link } from 'react-router-dom';
import Header from './component/Header';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './component/Profile';

const Home = () => {
   
    // const { loginWithRedirect } = useAuth0();
    const {logout} = useAuth0();
    return (
        
        <div>
            <Header/>
            
        <h1>Welcome to the home page of our App</h1>
            
            <button onClick={() => logout({logoutParams:{returnTo:window.location.origin}})}>Log Out</button>

        </div>
  )
}

export default Home
{/* <button onClick={() => loginWithRedirect()}>Log In</button> */}