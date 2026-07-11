/*
  Header.jsx

  This file defines the header component for GeoGoHub.

  Responsibilities:
  - Display the application title.
  - Display the main navigation.
  - Pass navigation actions to the Navbar.
  - Provide a consistent header across all pages.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import Navbar from './Navbar.jsx';
import '../styles/Header.css';

// Render the application header.
function Header({ onNavigate }) {
  return (
    <header>
      <h1>GeoGo Hub</h1>

      <Navbar onNavigate={onNavigate} />
    </header>
  );
}

Header.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default Header;