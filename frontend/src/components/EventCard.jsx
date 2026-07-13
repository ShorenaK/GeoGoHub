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
    <article className="event-card">
      <div className="event-card__header">
        <p className="event-card__category">{event.category}</p>
        <h3>{event.title}</h3>
      </div>

      <p className="event-card__description">{event.description}</p>

      <dl className="event-card__details">
        <div>
          <dt>Location</dt>
          <dd>{event.location}</dd>
        </div>

        <div>
          <dt>Capacity</dt>
          <dd>{event.capacity} guests</dd>
        </div>
      </dl>
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
