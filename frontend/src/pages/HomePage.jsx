/*
  HomePage.jsx

  This file defines the home page for GeoGoHub.

  Responsibilities:
  - Welcome visitors to GeoGoHub.
  - Introduce the purpose of the application.
  - Encourage visitors to explore membership and events.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import '../styles/HomePage.css';

// Render the home page.
function HomePage() {
  return (
    <main>
      <section>
        <h2>Welcome to GeoGoHub</h2>

        <p>
          GeoGoHub is an exclusive members club connecting people through curated events, networking
          opportunities, and cultural experiences inspired by Georgia.
        </p>

        <button type="button">Become a Member</button>

        <button type="button">View Events</button>
      </section>
    </main>
  );
}

export default HomePage;
