/*
  App.jsx

  This file defines the root React component for GeoGoHub.

  Responsibilities:
  - Render the main application layout.
  - Track the currently selected page.
  - Display the appropriate page component.
  - Connect navigation actions to page content.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { useState } from 'react';

import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ApplicationPage from './pages/ApplicationPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';

// Render the main application and selected page.
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Return the page selected through the navigation.
  function renderPage() {
    switch (currentPage) {
      case 'events':
        return <EventsPage />;

      case 'application':
        return <ApplicationPage />;

      case 'login':
        return <LoginPage />;

      case 'dashboard':
        return <DashboardPage />;

      case 'home':
      default:
        return <HomePage />;
    }
  }

  return (
    <>
      <Header onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;