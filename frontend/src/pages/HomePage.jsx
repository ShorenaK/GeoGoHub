/*
  HomePage.jsx

  This file defines the home page for GeoGoHub.

  Responsibilities:
  - Welcome visitors to GeoGoHub.
  - Introduce the purpose of the application.
  - Explain the benefits of membership.
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
      <section className="home-page__hero" aria-labelledby="home-page-title">
        <div className="home-page__hero-content">
          <p className="home-page__eyebrow">Private Community Club in Georgia</p>

          <h1 id="home-page-title">Welcome to GeoGoHub</h1>

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
        </div>

        <aside className="home-page__club-card" aria-label="GeoGoHub private club">
          <div className="home-page__logo-mark" aria-hidden="true">
            GG
          </div>

          <p className="home-page__club-name">GeoGoHub</p>
          <p className="home-page__club-type">Private Club</p>

          <p className="home-page__club-description">
            Building connections, creating opportunities, and sharing experiences inspired by
            Georgia.
          </p>
        </aside>
      </section>

      <section className="home-page__benefits" aria-labelledby="membership-benefits-title">
        <div className="home-page__benefits-heading">
          <p className="home-page__eyebrow">Why Join</p>

          <h2 id="membership-benefits-title">Membership Benefits</h2>

          <p>
            Join a welcoming community designed to help members build relationships, discover new
            interests, and take part in memorable experiences.
          </p>
        </div>

        <div className="home-page__benefits-grid">
          <article className="home-page__benefit-card">
            <h3>Curated Events</h3>

            <p>
              Attend networking, dining, sports, and cultural events selected for the GeoGoHub
              community.
            </p>
          </article>

          <article className="home-page__benefit-card">
            <h3>Meaningful Connections</h3>

            <p>
              Meet professionals, entrepreneurs, founders, and creatives in a relaxed community
              setting.
            </p>
          </article>

          <article className="home-page__benefit-card">
            <h3>Member Experiences</h3>

            <p>
              Discover private activities and opportunities created to help members connect beyond
              traditional networking.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

HomePage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default HomePage;
