/*
  App.jsx

  This file defines the root React component for GeoGoHub.

  Responsibilities:
  - Render the main application layout.
  - Track the currently selected page.
  - Track internal page navigation history.
  - Track the authenticated user.
  - Restore an existing Passport session.
  - Handle login and logout.
  - Display the appropriate page component.

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
import { getProfile, logoutUser } from './services/api.js';

// Render the main application and selected page.
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageHistory, setPageHistory] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  // Restore the current user when a Passport session already exists.
  useEffect(() => {
    async function checkSession() {
      try {
        const response = await getProfile();
        const authenticatedUser = response.user || response.data || response;

        setCurrentUser(authenticatedUser);
      } catch {
        setCurrentUser(null);
      } finally {
        setIsCheckingSession(false);
      }
    }

    checkSession();
  }, []);

  // Navigate to another GeoGoHub page and remember the current page.
  function handleNavigate(page) {
    if (page === currentPage) {
      return;
    }

    setPageHistory((currentHistory) => [...currentHistory, currentPage]);
    setCurrentPage(page);
  }

  // Return to the previously visited GeoGoHub page.
  function handleBack() {
    if (pageHistory.length === 0) {
      return;
    }

    const previousPage = pageHistory[pageHistory.length - 1];

    setPageHistory((currentHistory) => currentHistory.slice(0, -1));
    setCurrentPage(previousPage);
  }

  // Save the authenticated user and open the dashboard.
  function handleLogin(user) {
    setCurrentUser(user);

    // Do not send a logged-in member back to the login screen.
    setPageHistory([]);
    setCurrentPage('dashboard');
  }

  // End the authenticated session and return to the home page.
  async function handleLogout() {
    try {
      await logoutUser();

      setCurrentUser(null);
      setPageHistory([]);
      setCurrentPage('home');
    } catch (error) {
      console.error(error.message);
    }
  }

  // Return the page selected through the navigation.
  function renderPage() {
    switch (currentPage) {
      case 'events':
        return <EventsPage currentUser={currentUser} />;

      case 'application':
        return <ApplicationPage currentUser={currentUser} />;

      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;

      case 'dashboard':
        return currentUser ? (
          <DashboardPage currentUser={currentUser} onNavigate={handleNavigate} />
        ) : (
          <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />
        );

      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  }

  if (isCheckingSession) {
    return (
      <>
        <Header currentUser={null} onLogout={handleLogout} onNavigate={handleNavigate} />

        <main>
          <p>Loading GeoGoHub...</p>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header currentUser={currentUser} onLogout={handleLogout} onNavigate={handleNavigate} />

      {pageHistory.length > 0 && (
        <div className="app-back-navigation">
          <button type="button" className="app-back-button" onClick={handleBack}>
            ← Back
          </button>
        </div>
      )}

      {renderPage()}

      <Footer />
    </>
  );
}

export default App;