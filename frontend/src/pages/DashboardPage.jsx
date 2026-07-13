/*
  DashboardPage.jsx

  This file defines the dashboard page for GeoGoHub.

  Responsibilities:
  - Display personalized member information.
  - Display the authenticated user's membership details.
  - Provide access to member features and activity.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import '../styles/DashboardPage.css';

// Render the authenticated member dashboard.
function DashboardPage({ currentUser }) {
  const displayName =
    currentUser.firstName || currentUser.name || currentUser.email?.split('@')[0] || 'Member';

  return (
    <main className="dashboard-page">
      <section className="dashboard-page__content">
        <p className="dashboard-page__eyebrow">Member Dashboard</p>

        <h2>Welcome, {displayName}</h2>

        <div className="dashboard-card">
          <h3>Your Profile</h3>

          {currentUser.email && (
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
          )}

          {currentUser.role && (
            <p>
              <strong>Role:</strong> {currentUser.role}
            </p>
          )}

          {currentUser.membershipStatus && (
            <p>
              <strong>Membership status:</strong> {currentUser.membershipStatus}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

DashboardPage.propTypes = {
  currentUser: PropTypes.shape({
    firstName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    membershipStatus: PropTypes.string,
  }).isRequired,
};

export default DashboardPage;
