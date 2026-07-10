/*
  Navbar.jsx

  This file defines the navigation component for GeoGoHub.

  Responsibilities:
  - Display the main navigation links.
  - Help users move between application pages.
  - Provide consistent navigation across the application.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import '../styles/Navbar.css';

// Render the main navigation.
function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/application">Membership</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
