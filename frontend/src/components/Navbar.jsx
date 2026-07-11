/*
  Navbar.jsx

  This file defines the navigation component for GeoGoHub.

  Responsibilities:
  - Display the main navigation buttons.
  - Change the current page without reloading the browser.
  - Provide consistent navigation across the application.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import '../styles/Navbar.css';

// Render the main navigation.
function Navbar({ onNavigate }) {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <button type="button" onClick={() => onNavigate('home')}>
            Home
          </button>
        </li>

        <li>
          <button type="button" onClick={() => onNavigate('events')}>
            Events
          </button>
        </li>

        <li>
          <button type="button" onClick={() => onNavigate('application')}>
            Membership
          </button>
        </li>

        <li>
          <button type="button" onClick={() => onNavigate('login')}>
            Login
          </button>
        </li>

        <li>
          <button type="button" onClick={() => onNavigate('dashboard')}>
            Dashboard
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default Navbar;