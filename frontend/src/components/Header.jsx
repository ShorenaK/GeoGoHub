/*
  Header.jsx

  This file defines the header component for GeoGoHub.

  Responsibilities:
  - Display the application title.
  - Display a welcome message for authenticated users.
  - Display the main navigation.
  - Pass navigation and logout actions to the Navbar.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import Navbar from './Navbar.jsx';
import '../styles/Header.css';

// Render the application header.
function Header({ currentUser = null, onLogout, onNavigate }) {
  const displayName =
    currentUser?.firstName || currentUser?.name || currentUser?.email?.split('@')[0];

  return (
    <header>
      <div>
        <h1>GeoGo Hub</h1>

        {currentUser && <p className="header__welcome">Welcome, {displayName}</p>}
      </div>

      <Navbar currentUser={currentUser} onLogout={onLogout} onNavigate={onNavigate} />
    </header>
  );
}

Header.propTypes = {
  currentUser: PropTypes.shape({
    firstName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default Header;
