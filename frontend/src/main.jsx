/*
  main.jsx

  This file is the entry point for the GeoGoHub React application.

  Responsibilities:
  - Render the root React component.
  - Initialize the React application.
  - Mount the application to the HTML root element.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Render the React application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
