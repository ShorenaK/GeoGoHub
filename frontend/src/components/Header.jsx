/*
  Header.jsx

  This file defines the header component for GeoGoHub.

  Responsibilities:
  - Display the application title.
  - Display the main navigation.
  - Provide a consistent header across all pages.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import Navbar from './Navbar.jsx';

// Render the application header.
function Header() {
  return (
    <header>
      <h1>GeoGo Hub</h1>

      <Navbar />
    </header>
  );
}

export default Header;
