/*
  EventsPage.jsx

  This file defines the events page for GeoGoHub.

  Responsibilities:
  - Retrieve events from the backend API.
  - Display loading and error messages.
  - Render the available club events.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { useEffect, useState } from 'react';

import EventList from '../components/EventList.jsx';
import { getEvents } from '../services/api.js';
import '../styles/EventsPage.css';

// Render the events page.
function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await getEvents();
        setEvents(response.data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (isLoading) {
    return (
      <main className="events-page">
        <p className="events-page__message">Loading events...</p>
      </main>
    );
  }

  if (errorMessage) {
    return (
      <main className="events-page">
        <p className="events-page__error">{errorMessage}</p>
      </main>
    );
  }

  return (
    <main className="events-page">
      <section className="events-page__content">
        <div className="events-page__heading">
          <p className="events-page__eyebrow">GeoGoHub Experiences</p>
          <h2>Upcoming Events</h2>
          <p>
            Explore curated gatherings created for members to connect, share ideas, and build
            meaningful relationships.
          </p>
        </div>

        {events.length === 0 ? (
          <p className="events-page__message">No events are currently available.</p>
        ) : (
          <EventList events={events} />
        )}
      </section>
    </main>
  );
}

export default EventsPage;
