/*
  DashboardPage.jsx

  This file defines the dashboard page for GeoGoHub.

  Responsibilities:
  - Display personalized member information.
  - Display membership details.
  - Retrieve and display the member's RSVPs.
  - Provide quick access to member features.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getEvents, getMyRsvps } from '../services/api.js';
import '../styles/DashboardPage.css';

// Render the authenticated member dashboard.
function DashboardPage({ currentUser, onNavigate }) {
  const [memberRsvps, setMemberRsvps] = useState([]);
  const [isLoadingRsvps, setIsLoadingRsvps] = useState(true);
  const [rsvpError, setRsvpError] = useState('');

  const displayName =
    currentUser.firstName || currentUser.name || currentUser.email?.split('@')[0] || 'Member';

  useEffect(() => {
    async function loadMemberRsvps() {
      try {
        setRsvpError('');

        const [rsvpResponse, eventResponse] = await Promise.all([getMyRsvps(), getEvents()]);

        const events = eventResponse.data;
        const rsvps = rsvpResponse.data;

        const rsvpsWithEvents = rsvps.map((rsvp) => {
          const matchingEvent = events.find((event) => event._id === rsvp.eventId);

          return {
            ...rsvp,
            event: matchingEvent || null,
          };
        });

        setMemberRsvps(rsvpsWithEvents);
      } catch (error) {
        setRsvpError(error.message);
      } finally {
        setIsLoadingRsvps(false);
      }
    }

    loadMemberRsvps();
  }, []);

  return (
    <main className="dashboard-page">
      <section className="dashboard-page__content">
        <div className="dashboard-page__heading">
          <p className="dashboard-page__eyebrow">Member Dashboard</p>

          <h2>Welcome Back, {displayName}</h2>

          <p>Manage your membership and explore upcoming GeoGoHub private events.</p>
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
                  {currentUser.membershipStatus
                    ? currentUser.membershipStatus.charAt(0).toUpperCase() +
                      currentUser.membershipStatus.slice(1)
                    : 'Not available'}
                </dd>
              </div>

              <div>
                <dt>Role</dt>
                <dd>
                  {currentUser.role
                    ? currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)
                    : 'Member'}
                </dd>
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

        <section className="dashboard-card dashboard-rsvps">
          <div className="dashboard-rsvps__heading">
            <div>
              <h3>My RSVPs</h3>
              <p>Review the events you are planning to attend.</p>
            </div>

            <button type="button" onClick={() => onNavigate('events')}>
              Manage RSVPs
            </button>
          </div>

          {isLoadingRsvps && <p className="dashboard-rsvps__message">Loading your RSVPs...</p>}

          {rsvpError && (
            <p className="dashboard-rsvps__error" role="alert">
              {rsvpError}
            </p>
          )}

          {!isLoadingRsvps && !rsvpError && memberRsvps.length === 0 && (
            <p className="dashboard-rsvps__message">You have not RSVP’d to any events yet.</p>
          )}

          {!isLoadingRsvps && !rsvpError && memberRsvps.length > 0 && (
            <div className="dashboard-rsvp-list">
              {memberRsvps.map((rsvp) => (
                <article className="dashboard-rsvp-item" key={rsvp._id}>
                  <div>
                    <h4>{rsvp.event?.title || 'Event information unavailable'}</h4>

                    {rsvp.event && (
                      <p>
                        {formatEventDate(rsvp.event.date)}
                        {rsvp.event.time ? ` at ${rsvp.event.time}` : ''}
                        {rsvp.event.location ? ` · ${rsvp.event.location}` : ''}
                      </p>
                    )}
                  </div>

                  <span
                    className={`dashboard-rsvp-status dashboard-rsvp-status--${rsvp.status.replaceAll(
                      ' ',
                      '-',
                    )}`}
                  >
                    {rsvp.status}
                  </span>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

// Format an ISO date as a readable calendar date.
function formatEventDate(dateValue) {
  if (!dateValue) {
    return 'Date not available';
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return 'Date not available';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
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
