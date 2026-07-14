/*
  ApplicationPage.jsx

  This file defines the membership application page for GeoGoHub.

  Responsibilities:
  - Display the membership application form.
  - Manage form input using React state.
  - Submit applications to the backend API.
  - Display loading, error, and success states.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { useState } from 'react';
import PropTypes from 'prop-types';

import { submitApplication } from '../services/api.js';
import '../styles/ApplicationPage.css';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  profession: '',
  company: '',
  reason: '',
};

// Render the membership application page.
function ApplicationPage({ currentUser = null }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      await submitApplication(formData);

      setSuccessMessage(
        'Your membership application was submitted successfully. Our team will review it soon.',
      );

      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }
  if (currentUser?.membershipStatus === 'pending') {
  return (
    <main className="application-page">
      <section className="application-status-card">
        <p className="application-page__eyebrow">Membership Status</p>

        <h2>Application Pending</h2>

        <p className="application-status-card__badge application-status-card__badge--pending">
          Pending
        </p>

        <p>
          Your membership application has been received and is currently
          under review.
        </p>

        <p>
          You will receive an update when the GeoGoHub membership team makes
          a decision.
        </p>
      </section>
    </main>
  );
}

if (currentUser?.membershipStatus === 'approved') {
  const displayName =
    currentUser.firstName ||
    currentUser.name ||
    currentUser.email?.split('@')[0] ||
    'Member';

  return (
    <main className="application-page">
      <section className="application-status-card">
        <p className="application-page__eyebrow">Membership</p>

        <h2>Welcome, {displayName}</h2>

        <p className="application-status-card__badge application-status-card__badge--approved">
          Approved
        </p>

        <dl className="application-status-details">
          <div>
            <dt>Status</dt>
            <dd>Approved</dd>
          </div>

          <div>
            <dt>Role</dt>
            <dd>{currentUser.role || 'Member'}</dd>
          </div>

          <div>
            <dt>Email</dt>
            <dd>{currentUser.email || 'Not available'}</dd>
          </div>
        </dl>

        <p>Your GeoGoHub membership is active.</p>
      </section>
    </main>
  );
}

  return (
    <main className="application-page">
      <section className="application-page__content">
        <div className="application-page__heading">
          <p className="application-page__eyebrow">
            Join the GeoGoHub Community
          </p>

          <h2>Membership Application</h2>

          <p>
            Tell us about yourself and why you would like to become part of
            GeoGoHub.
          </p>
        </div>

        <form
          className="application-form"
          onSubmit={handleSubmit}
        >
          <div className="application-form__row">
            <div className="application-form__field">
              <label htmlFor="application-first-name">
                First name
              </label>

              <input
                id="application-first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                required
              />
            </div>

            <div className="application-form__field">
              <label htmlFor="application-last-name">
                Last name
              </label>

              <input
                id="application-last-name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                required
              />
            </div>
          </div>

          <div className="application-form__field">
            <label htmlFor="application-email">
              Email address
            </label>

            <input
              id="application-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="application-form__row">
            <div className="application-form__field">
              <label htmlFor="application-profession">
                Profession
              </label>

              <input
                id="application-profession"
                name="profession"
                type="text"
                value={formData.profession}
                onChange={handleChange}
                required
              />
            </div>

            <div className="application-form__field">
              <label htmlFor="application-company">
                Company or organization
              </label>

              <input
                id="application-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="application-form__field">
            <label htmlFor="application-reason">
              Why would you like to join GeoGoHub?
            </label>

            <textarea
              id="application-reason"
              name="reason"
              rows="6"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>

          {errorMessage && (
            <p
              className="application-form__message application-form__message--error"
              role="alert"
            >
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p
              className="application-form__message application-form__message--success"
              role="status"
            >
              {successMessage}
            </p>
          )}

          <button
            className="application-form__submit"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Submitting application...'
              : 'Submit Application'}
          </button>
        </form>
      </section>
    </main>
  );
}

ApplicationPage.propTypes = {
  currentUser: PropTypes.shape({
    firstName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    membershipStatus: PropTypes.string,
  }),
};

export default ApplicationPage;