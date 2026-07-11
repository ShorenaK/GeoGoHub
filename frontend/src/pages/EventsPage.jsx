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

import { getEvents } from '../services/api.js';
import '../styles/EventsPage.css';

// Render the events page.
function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

}
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
if (isLoading) {
    return (
      <main>
        <p>Loading events...</p>
      </main>
    );
  }

  if (errorMessage) {
    return (
      <main>
        <p>{errorMessage}</p>
      </main>
    );
  }
    loadEvents();
  }, []);

  
export default EventsPage;