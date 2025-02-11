import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Import the CSS file for styling
import App from './App' // Import the App component

// Create the root element and render the App component
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
