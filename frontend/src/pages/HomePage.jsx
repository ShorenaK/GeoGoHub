/*
  HomePage.jsx

  This file defines the home page for GeoGoHub.

  Responsibilities:
  - Welcome visitors to GeoGoHub.
  - Introduce the purpose of the application.
  - Encourage visitors to explore membership and events.
  - Navigate visitors to key application pages.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import '../styles/HomePage.css';

// Render the home page.
function HomePage({ onNavigate }) {
  return (
    <main className="home-page">
      <section className="home-page__hero">
        <p className="home-page__eyebrow">Private Community in Georgia</p>

        <h2>Welcome to GeoGoHub</h2>

        <p className="home-page__description">
          GeoGoHub is an exclusive members club connecting professionals, entrepreneurs, founders,
          and creatives through curated events, sports, networking opportunities, and cultural
          experiences inspired by Georgia.
        </p>

        <div className="home-page__actions">
          <button
            type="button"
            className="home-page__button home-page__button--primary"
            onClick={() => onNavigate('application')}
          >
            Become a Member
          </button>

          <button
            type="button"
            className="home-page__button home-page__button--secondary"
            onClick={() => onNavigate('events')}
          >
            View Events
          </button>
        </div>
      </section>
    </main>
  );
}

HomePage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default HomePage;
