/*
  EventsPage.jsx

  This file defines the events page for GeoGoHub.

  Responsibilities:
  - Retrieve events from the backend API.
  - Retrieve the authenticated member's RSVPs.
  - Create, update, and cancel RSVPs.
  - Display loading, error, and success messages.
  - Render available club events.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import EventList from '../components/EventList.jsx';
import { createRsvp, deleteRsvp, getEvents, getMyRsvps, updateRsvp } from '../services/api.js';
import '../styles/EventsPage.css';

// Render the events page.
function EventsPage({ currentUser = null }) {
  const [events, setEvents] = useState([]);
  const [rsvps, setRsvps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pendingEventId, setPendingEventId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const canManageRsvps =
    currentUser?.role === 'admin' ||
    (currentUser?.role === 'member' && currentUser?.membershipStatus === 'approved');

  useEffect(() => {
    async function loadPageData() {
      try {
        setErrorMessage('');

        const eventsResponse = await getEvents();
        setEvents(eventsResponse.data);

        if (canManageRsvps) {
          const rsvpsResponse = await getMyRsvps();
          setRsvps(rsvpsResponse.data);
        }
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadPageData();
  }, [canManageRsvps]);

  function findRsvpForEvent(eventId) {
    return rsvps.find((rsvp) => rsvp.eventId === eventId);
  }

  async function handleCreateRsvp(eventId, status) {
    try {
      setPendingEventId(eventId);
      setErrorMessage('');
      setSuccessMessage('');

      const response = await createRsvp({
        eventId,
        status,
      });

      setRsvps((currentRsvps) => [...currentRsvps, response.data]);

      setSuccessMessage('Your RSVP was saved successfully.');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setPendingEventId('');
    }
  }

  async function handleUpdateRsvp(rsvpId, eventId, status) {
    try {
      setPendingEventId(eventId);
      setErrorMessage('');
      setSuccessMessage('');

      await updateRsvp(rsvpId, { status });

      setRsvps((currentRsvps) =>
        currentRsvps.map((rsvp) =>
          rsvp._id === rsvpId
            ? {
                ...rsvp,
                status,
              }
            : rsvp,
        ),
      );

      setSuccessMessage('Your RSVP was updated successfully.');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setPendingEventId('');
    }
  }

  async function handleDeleteRsvp(rsvpId, eventId) {
    try {
      setPendingEventId(eventId);
      setErrorMessage('');
      setSuccessMessage('');

      await deleteRsvp(rsvpId);

      setRsvps((currentRsvps) => currentRsvps.filter((rsvp) => rsvp._id !== rsvpId));

      setSuccessMessage('Your RSVP was canceled.');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setPendingEventId('');
    }
  }

  if (isLoading) {
    return (
      <main className="events-page">
        <p className="events-page__message">Loading events...</p>
      </main>
    );
  }

  return (
    <main className="events-page">
      <section className="events-page__content">
        <div className="events-page__heading">
          <p className="events-page__eyebrow">GeoGoHub Private Club</p>

          <h2>Upcoming Events</h2>

          <p>
            Explore curated gatherings created for members to connect, share ideas, and build
            meaningful relationships.
          </p>
        </div>

        {errorMessage && (
          <p className="events-page__error" role="alert">
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p className="events-page__success" role="status">
            {successMessage}
          </p>
        )}

        {!currentUser && (
          <p className="events-page__notice">Log in as an approved member to RSVP to events.</p>
        )}

        {events.length === 0 ? (
          <p className="events-page__message">No events are currently available.</p>
        ) : (
          <EventList
            events={events}
            canManageRsvps={canManageRsvps}
            findRsvpForEvent={findRsvpForEvent}
            onCreateRsvp={handleCreateRsvp}
            onDeleteRsvp={handleDeleteRsvp}
            onUpdateRsvp={handleUpdateRsvp}
            pendingEventId={pendingEventId}
          />
        )}
      </section>
    </main>
  );
}

EventsPage.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string,
    membershipStatus: PropTypes.string,
  }),
};

export default EventsPage;
