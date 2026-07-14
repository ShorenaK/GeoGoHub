/*
  DashboardPage.jsx

  This file defines the dashboard page for GeoGoHub.

  Responsibilities:
  - Display personalized member information.
  - Display membership details.
  - Provide quick access to member features.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import '../styles/DashboardPage.css';

// Render the authenticated member dashboard.
function DashboardPage({ currentUser, onNavigate }) {
  const displayName =
    currentUser.firstName || currentUser.name || currentUser.email?.split('@')[0] || 'Member';

  return (
    <main className="dashboard-page">
      <section className="dashboard-page__content">
        <div className="dashboard-page__heading">
          <p className="dashboard-page__eyebrow">Member Dashboard</p>

          <h2>Welcome back, {displayName}</h2>

          <p>Manage your membership and explore upcoming GeoGoHub experiences.</p>
        </div>

        <div className="dashboard-grid">
          <section className="dashboard-card">
            <h3>Member Information</h3>

            <dl className="dashboard-details">
              <div>
                <dt>Name</dt>
                <dd>{displayName}</dd>
              </div>

              <div>
                <dt>Email</dt>
                <dd>{currentUser.email || 'Not available'}</dd>
              </div>

              <div>
                <dt>Membership</dt>
                <dd className="dashboard-status">
                  {currentUser.membershipStatus || 'Not available'}
                </dd>
              </div>

              <div>
                <dt>Role</dt>
                <dd>{currentUser.role || 'Member'}</dd>
              </div>
            </dl>
          </section>

          <section className="dashboard-card">
            <h3>Quick Actions</h3>

            <div className="dashboard-actions">
              <button type="button" onClick={() => onNavigate('events')}>
                Browse Events
              </button>

              <button type="button" onClick={() => onNavigate('application')}>
                View Membership
              </button>
            </div>
          </section>
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
  onNavigate: PropTypes.func.isRequired,
};

export default DashboardPage;
