/*
  EventList.jsx

  This file defines the event list component for GeoGoHub.

  Responsibilities:
  - Render a collection of events.
  - Display one EventCard for each event.
  - Keep list rendering separate from the page.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import EventCard from './EventCard.jsx';

// Render a collection of events.
function EventList({ events }) {
  return (
    <div>
      {events.map((event) => (
        <EventCard
          key={event._id}
          event={event}
        />
      ))}
    </div>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      capacity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default EventList;