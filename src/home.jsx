import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
        <h1>Welcome to the home page of our App</h1>
            <button onClick={() => loginWithRedirect()}>Log In</button>

        </div>
  )
}

export default Home