import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-raetjt7u7sj7tx5x.us.auth0.com"
    clientId="tTjtqE755qY72KDFAfp6tZXfCATVKknB"
    // redirectUri =  {window.location.origin}
    authorizationParams={{
      // redirect_uri: window.location.origin
      redirect_uri: 'http://localhost:5173/home'
    }}
    
  >
    <App />
  </Auth0Provider>,
)
