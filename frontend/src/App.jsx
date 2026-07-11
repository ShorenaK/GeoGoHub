/*
  App.jsx

  This file defines the root React component for GeoGoHub.

  Responsibilities:
  - Render the main application layout.
  - Display the header, page content, and footer.
  - Serve as the starting point for the frontend.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';


/* <HomePage /> */

// Render the main application layout.
function App() {
  return (
    <>
      <Header />
  
      <EventsPage />
      <Footer />
    </>
  );
}

export default App;
