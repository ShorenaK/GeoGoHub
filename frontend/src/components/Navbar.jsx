/*
  Navbar.jsx

  This file defines the navigation component for GeoGoHub.

  Responsibilities:
  - Display the main navigation buttons.
  - Change the current page without reloading the browser.
  - Display authentication-specific navigation options.
  - Allow authenticated users to log out.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import '../styles/Navbar.css';

// Render the main navigation.
function Navbar({ currentUser, onLogout, onNavigate }) {
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
          <button
            type="button"
            onClick={() => onNavigate('application')}
          >
            Membership
          </button>
        </li>

        {currentUser ? (
          <>
            <li>
              <button
                type="button"
                onClick={() => onNavigate('dashboard')}
              >
                Dashboard
              </button>
            </li>

            <li>
              <button type="button" onClick={onLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <button type="button" onClick={() => onNavigate('login')}>
              Login
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  currentUser: PropTypes.shape({
    firstName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  currentUser: null,
};

export default Navbar;