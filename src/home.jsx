import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
        <h1>Welcome to My App</h1>
            <button onClick={() => loginWithRedirect()}>Log In</button>

        </div>
  )
}

export default Home