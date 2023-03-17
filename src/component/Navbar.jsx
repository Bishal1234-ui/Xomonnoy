import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



function Navbar() {
  const {logout} = useAuth0();

  return (
    <div class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/home">
      <a class="mr-5 hover:text-gray-200">Home</a>
      </Link>
      <Link to="/profile">
      <a class="mr-5 hover:text-gray-200">Profile</a>
      </Link>
      <Link to="/rmMemories">
      <a class="mr-5 hover:text-gray-200">ReminiscingMemories</a>
      </Link>
      <Link to="/login">
      <a class="mr-5 hover:text-gray-200">AdminDashBoard</a>
      </Link>
      <Link to="/directories">
      <a class="mr-5 hover:text-gray-200">Directories</a>
      </Link>
      <Link to="/chat">
      <a class="mr-5 hover:text-gray-200">Student-Alumni-Mentorship</a>
      </Link>
      <a class="mr-5 hover:text-gray-200" href='/chat.html'>AlumniMentorShip</a>
      

    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={() => logout({logoutParams:{returnTo:window.location.origin}})}>Log out
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</div>
    
  );
}

export default Navbar;
