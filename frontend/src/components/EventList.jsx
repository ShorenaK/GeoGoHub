/*
  EventList.jsx

  This file defines the event list component for GeoGoHub.

  Responsibilities:
  - Render a collection of events.
  - Display one EventCard for each event.
  - Pass RSVP data and actions to each event card.
  - Keep list rendering separate from the page.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import EventCard from './EventCard.jsx';
import '../styles/EventList.css';

// Render a collection of events.
function EventList({
  events,
  canManageRsvps,
  findRsvpForEvent,
  onCreateRsvp,
  onDeleteRsvp,
  onUpdateRsvp,
  pendingEventId,
}) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          key={event._id}
          event={event}
          rsvp={findRsvpForEvent(event._id)}
          canManageRsvps={canManageRsvps}
          isPending={pendingEventId === event._id}
          onCreateRsvp={onCreateRsvp}
          onDeleteRsvp={onDeleteRsvp}
          onUpdateRsvp={onUpdateRsvp}
        />
      ))}
    </div>
  );
}

const eventShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
});

EventList.propTypes = {
  events: PropTypes.arrayOf(eventShape).isRequired,
  canManageRsvps: PropTypes.bool.isRequired,
  findRsvpForEvent: PropTypes.func.isRequired,
  onCreateRsvp: PropTypes.func.isRequired,
  onDeleteRsvp: PropTypes.func.isRequired,
  onUpdateRsvp: PropTypes.func.isRequired,
  pendingEventId: PropTypes.string.isRequired,
};

export default EventList;
