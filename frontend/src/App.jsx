/*
  App.jsx

  This file defines the root React component for GeoGoHub.

  Responsibilities:
  - Render the main application layout.
  - Track the currently selected page.
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

  // End the authenticated session and return to the home page.
  async function handleLogout() {
    try {
      await logoutUser();
      setCurrentUser(null);
      setCurrentPage('home');
    } catch (error) {
      console.error(error.message);
    }
  }

  // Return the page selected through the navigation.
  function renderPage() {
    switch (currentPage) {
      case 'events':
        return <EventsPage />;

      case 'application':
        return <ApplicationPage />;

      case 'login':
        return (
          <LoginPage
            onLogin={handleLogin}
            onNavigate={setCurrentPage}
          />
        );

      case 'dashboard':
        return currentUser ? (
          <DashboardPage currentUser={currentUser} />
        ) : (
          <LoginPage
            onLogin={handleLogin}
            onNavigate={setCurrentPage}
          />
        );

      case 'home':
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  }

  if (isCheckingSession) {
    return (
      <>
        <Header
          currentUser={null}
          onLogout={handleLogout}
          onNavigate={setCurrentPage}
        />

        <main>
          <p>Loading GeoGoHub...</p>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header
        currentUser={currentUser}
        onLogout={handleLogout}
        onNavigate={setCurrentPage}
      />

      {renderPage()}

      <Footer />
    </>
  );
}

export default App;