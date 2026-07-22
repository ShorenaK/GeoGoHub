/* Great job including comments in your document to describe the purpose of this component and its responsibilities. */
  EventCard.jsx

  This file defines the reusable event card component for GeoGoHub.

  Responsibilities:
  - Display information for one event.
  - Display the authenticated member's RSVP status.
  - Allow members to create, update, or cancel an RSVP.
  - Keep event presentation separate from the events page.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import PropTypes from 'prop-types';

import '../styles/EventCard.css';

// Render one event.
function EventCard({
  event,
  rsvp = null,
  canManageRsvps,
  isPending,
  onCreateRsvp,
  onDeleteRsvp,
  onUpdateRsvp,
}) {
  function handleStatusChange(changeEvent) {
    const status = changeEvent.target.value;

    if (rsvp) {
      onUpdateRsvp(rsvp._id, event._id, status);
    }
  }

  return (
    <article className="event-card">
      <div className="event-card__header">
        <p className="event-card__category">{event.category}</p>
        <h3>{event.title}</h3>
      </div>

      <p className="event-card__description">{event.description}</p>
      <dl className="event-card__details">
        <div>
          <dt>Date</dt>
          <dd>{formatEventDate(event.date)}</dd>
        </div>

        <div>
          <dt>Time</dt>
          <dd>{event.time || 'Time not available'}</dd>
        </div>

        <div>
          <dt>Location</dt>
          <dd>{event.location}</dd>
        </div>

        <div>
          <dt>Capacity</dt>
          <dd>{event.capacity} guests</dd>
        </div>
      </dl>

      {canManageRsvps && (
        <div className="event-card__rsvp">
          {rsvp ? (
            <>
              <label htmlFor={`rsvp-status-${event._id}`}>Your RSVP</label>

              <select
                id={`rsvp-status-${event._id}`}
                value={rsvp.status}
                onChange={handleStatusChange}
                disabled={isPending}
              >
                <option value="going">Going</option>
                <option value="maybe">Maybe</option>
                <option value="not going">Not going</option>
              </select>

              <button
                type="button"
                className="event-card__cancel"
                onClick={() => onDeleteRsvp(rsvp._id, event._id)}
                disabled={isPending}
              >
                {isPending ? 'Updating...' : 'Cancel RSVP'}
              </button>
            </>
          ) : (
            <button
              type="button"
              className="event-card__rsvp-button"
              onClick={() => onCreateRsvp(event._id, 'going')}
              disabled={isPending}
            >
              {isPending ? 'Saving...' : 'RSVP — Going'}
            </button>
          )}
        </div>
      )}
    </article>
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
/* Great job with the PropTypes module use here. */
EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string,
    time: PropTypes.string,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
  rsvp: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    eventId: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  canManageRsvps: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  onCreateRsvp: PropTypes.func.isRequired,
  onDeleteRsvp: PropTypes.func.isRequired,
  onUpdateRsvp: PropTypes.func.isRequired,
};

export default EventCard;
