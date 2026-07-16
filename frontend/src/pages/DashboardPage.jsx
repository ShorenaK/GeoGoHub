/*
  DashboardPage.jsx

  This file defines the dashboard page for GeoGoHub.

  Responsibilities:
  - Display personalized member information.
  - Display the member's RSVPs.
  - Display administrative application and event controls.
  - Render dashboard content based on the authenticated user's role.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  deleteEvent,
  getApplications,
  getEvents,
  getMyRsvps,
  updateApplication,
} from '../services/api.js';
import '../styles/DashboardPage.css';

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

// Capitalize a stored lowercase value for display.
function formatLabel(value, fallbackValue) {
  if (!value) {
    return fallbackValue;
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Render the authenticated dashboard.
function DashboardPage({ currentUser, onNavigate }) {
  const [memberRsvps, setMemberRsvps] = useState([]);
  const [applications, setApplications] = useState([]);
  const [adminEvents, setAdminEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [pendingItemId, setPendingItemId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const isAdmin = currentUser.role === 'admin';

  const displayName =
    currentUser.firstName || currentUser.name || currentUser.email?.split('@')[0] || 'Member';

  useEffect(() => {
    async function loadDashboard() {
      try {
        setErrorMessage('');

        if (isAdmin) {
          const [applicationResponse, eventResponse] = await Promise.all([
            getApplications(),
            getEvents(),
          ]);

          setApplications(applicationResponse.data);
          setAdminEvents(eventResponse.data);
        } else {
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
        }
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboard();
  }, [isAdmin]);

  async function handleApplicationStatus(applicationId, status) {
    try {
      setPendingItemId(applicationId);
      setErrorMessage('');
      setSuccessMessage('');

      await updateApplication(applicationId, { status });

      setApplications((currentApplications) =>
        currentApplications.map((application) =>
          application._id === applicationId
            ? {
                ...application,
                status,
              }
            : application,
        ),
      );

      setSuccessMessage(`The membership application was marked ${status}.`);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setPendingItemId('');
    }
  }

  async function handleDeleteEvent(eventId) {
    const shouldDelete = window.confirm('Are you sure you want to delete this event?');

    if (!shouldDelete) {
      return;
    }

    try {
      setPendingItemId(eventId);
      setErrorMessage('');
      setSuccessMessage('');

      await deleteEvent(eventId);

      setAdminEvents((currentEvents) => currentEvents.filter((event) => event._id !== eventId));

      setSuccessMessage('The event was deleted successfully.');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setPendingItemId('');
    }
  }

  if (isLoading) {
    return (
      <main className="dashboard-page">
        <p className="dashboard-message">Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-page__content">
        <div className="dashboard-page__heading">
          <p className="dashboard-page__eyebrow">
            {isAdmin ? 'Administrator Dashboard' : 'Member Dashboard'}
          </p>

          <h2>Welcome Back, {displayName}</h2>

          <p>
            {isAdmin
              ? 'Review membership applications and manage GeoGoHub events.'
              : 'Manage your membership and explore upcoming GeoGoHub private events.'}
          </p>
        </div>

        {errorMessage && (
          <p className="dashboard-message dashboard-message--error" role="alert">
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p className="dashboard-message dashboard-message--success" role="status">
            {successMessage}
          </p>
        )}

        <div className="dashboard-grid">
          <section className="dashboard-card">
            <h3>{isAdmin ? 'Administrator Information' : 'Member Information'}</h3>

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
                  {formatLabel(currentUser.membershipStatus, 'Not available')}
                </dd>
              </div>

              <div>
                <dt>Role</dt>
                <dd>{formatLabel(currentUser.role, 'Member')}</dd>
              </div>
            </dl>
          </section>

          <section className="dashboard-card">
            <h3>Quick Actions</h3>

            <div className="dashboard-actions">
              <button type="button" onClick={() => onNavigate('events')}>
                Browse Events
              </button>

              {!isAdmin && (
                <button type="button" onClick={() => onNavigate('application')}>
                  View Membership
                </button>
              )}
            </div>
          </section>
        </div>

        {isAdmin ? (
          <>
            <section className="dashboard-card dashboard-admin-section">
              <div className="dashboard-section-heading">
                <div>
                  <h3>Membership Applications</h3>
                  <p>Review and update submitted applications.</p>
                </div>

                <span>{applications.length} applications</span>
              </div>

              {applications.length === 0 ? (
                <p className="dashboard-message">No membership applications are available.</p>
              ) : (
                <div className="dashboard-admin-list">
                  {applications.map((application) => (
                    <article className="dashboard-admin-item" key={application._id}>
                      <div className="dashboard-admin-item__content">
                        <h4>
                          {application.firstName} {application.lastName}
                        </h4>

                        <p>{application.email}</p>

                        <p>
                          <strong>Profession:</strong> {application.profession}
                        </p>

                        {application.company && (
                          <p>
                            <strong>Company:</strong> {application.company}
                          </p>
                        )}

                        <p>
                          <strong>Reason:</strong> {application.reason}
                        </p>

                        <p>
                          <strong>Status:</strong> {formatLabel(application.status, 'Pending')}
                        </p>
                      </div>

                      <div className="dashboard-admin-actions">
                        <button
                          type="button"
                          onClick={() => handleApplicationStatus(application._id, 'approved')}
                          disabled={
                            pendingItemId === application._id || application.status === 'approved'
                          }
                        >
                          Approve
                        </button>

                        <button
                          type="button"
                          className="dashboard-admin-actions__decline"
                          onClick={() => handleApplicationStatus(application._id, 'declined')}
                          disabled={
                            pendingItemId === application._id || application.status === 'declined'
                          }
                        >
                          Decline
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <section className="dashboard-card dashboard-admin-section">
              <div className="dashboard-section-heading">
                <div>
                  <h3>Event Management</h3>
                  <p>Review and remove existing club events.</p>
                </div>

                <span>{adminEvents.length} events</span>
              </div>

              {adminEvents.length === 0 ? (
                <p className="dashboard-message">No events are currently available.</p>
              ) : (
                <div className="dashboard-admin-list">
                  {adminEvents.map((event) => (
                    <article className="dashboard-admin-item dashboard-admin-event" key={event._id}>
                      <div className="dashboard-admin-item__content">
                        <h4>{event.title}</h4>

                        <p>
                          {formatEventDate(event.date)}
                          {event.time ? ` at ${event.time}` : ''}
                        </p>

                        <p>{event.location}</p>
                      </div>

                      <button
                        type="button"
                        className="dashboard-delete-button"
                        onClick={() => handleDeleteEvent(event._id)}
                        disabled={pendingItemId === event._id}
                      >
                        {pendingItemId === event._id ? 'Deleting...' : 'Delete Event'}
                      </button>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </>
        ) : (
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

            {memberRsvps.length === 0 ? (
              <p className="dashboard-rsvps__message">You have not RSVP’d to any events yet.</p>
            ) : (
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
        )}
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
