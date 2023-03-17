import React from "react";
import "./ANavbar.css";
import { Link } from "react-router-dom";
const redirectToGoogleForm = () => {
  window.location.href = 'https://forms.gle/6UNQufWwG6wHr8Zw5';
};
const ANavbar = () => {
  return (
    <div class="text-gray-400 bg-gray-900 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-400 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        
        <Link to="/AlumniHome">
        <a class="mr-5 hover:text-gray-200">Home</a>
        </Link>
        <Link to="/rmMemories">
        <a class="mr-5 hover:text-gray-200">ReminiscingMemories</a>
        </Link>
        <Link to="/compose">
        <a class="mr-5 hover:text-gray-200">Compose</a>
        </Link>
        <button onClick={redirectToGoogleForm}>HelpingHands</button>
        
  
      </nav>
      <Link to="/home">
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log out
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </Link>
      
    </div>
  </div>
    
  );
};

export default ANavbar;


