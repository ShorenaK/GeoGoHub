/*
  App.jsx

  This file defines the root React component for GeoGoHub.

  Responsibilities:
  - Render the main application layout.
  - Track the currently selected page.
  - Track the authenticated user.
  - Restore an existing Passport session.
  - Display the appropriate page component.
  - Connect navigation and authentication actions.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { useEffect, useState } from 'react';

import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ApplicationPage from './pages/ApplicationPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { getProfile } from './services/api.js';

// Render the main application and selected page.
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  // Restore the current user when a Passport session already exists.
  useEffect(() => {
    async function checkSession() {
      try {
        const response = await getProfile();

        const authenticatedUser =
          response.user || response.data || response;

        setCurrentUser(authenticatedUser);
      } catch {
        setCurrentUser(null);
      } finally {
        setIsCheckingSession(false);
      }
    }

    checkSession();
  }, []);

  // Save the authenticated user and open the dashboard.
  function handleLogin(user) {
    setCurrentUser(user);
    setCurrentPage('dashboard');
  }

  // Return the page selected through the navigation.
  function renderPage() {
    switch (currentPage) {
      case 'events':
        return <EventsPage />;

      case 'application':
        return <ApplicationPage />;

      case 'login':
        return <LoginPage onLogin={handleLogin} />;

      case 'dashboard':
        return <DashboardPage />;

      case 'home':
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  }

  if (isCheckingSession) {
    return (
      <>
        <Header onNavigate={setCurrentPage} />

        <main>
          <p>Loading GeoGoHub...</p>
        </main>

        <Footer />
      </>
    );
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
