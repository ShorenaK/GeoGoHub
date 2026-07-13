/*
  LoginPage.jsx

  This file defines the login page for GeoGoHub.

  Responsibilities:
  - Display the login interface.
  - Allow users to authenticate.
  - Connect to the backend authentication API.
  - Display loading, error, and success states.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { useState } from 'react';
import PropTypes from 'prop-types';

import { loginUser } from '../services/api.js';
import '../styles/LoginPage.css';

// Render the login page.
function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
      const response = await loginUser(formData);

      const authenticatedUser =
        response.user || response.data || response;

      onLogin(authenticatedUser);
      setSuccessMessage('You have logged in successfully.');

      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-page__content">
        <div className="login-page__heading">
          <p className="login-page__eyebrow">Member Access</p>
          <h2>Log in to GeoGoHub</h2>
          <p>
            Access your member profile, private events, and RSVP activity.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__field">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="login-form__field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          {errorMessage && (
            <p className="login-form__message login-form__message--error">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="login-form__message login-form__message--success">
              {successMessage}
            </p>
          )}

          <button
            className="login-form__submit"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </section>
    </main>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
