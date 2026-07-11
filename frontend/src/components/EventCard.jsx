/*
  EventCard.jsx

  This file defines the reusable event card component for GeoGoHub.

  Responsibilities:
  - Display information for one event.
  - Keep event presentation separate from the events page.
  - Support reusable rendering of event collections.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import '../styles/EventCard.css';

// Render one event.
function EventCard({ event }) {
  return (
    <article>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Category:</strong> {event.category}
      </p>
      <p>
        <strong>Capacity:</strong> {event.capacity}
      </p>
    </article>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
  }).isRequired,
};

export default EventCard;
