/*
  api.js

  This file contains functions for communicating with the GeoGoHub backend API.

  Responsibilities:
  - Centralize all HTTP requests.
  - Connect the React frontend to the Express backend.
  - Provide reusable API functions.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

const API_BASE_URL = '/api';

// Read an API error message when one is available.
async function getErrorMessage(response, fallbackMessage) {
  try {
    const errorData = await response.json();
    return errorData.message || fallbackMessage;
  } catch {
    return fallbackMessage;
  }
}

// Retrieve all events.
export async function getEvents() {
  const response = await fetch(`${API_BASE_URL}/events`);

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to retrieve events.');
    throw new Error(message);
  }

  return response.json();
}

// Submit a new membership application.
export async function submitApplication(applicationData) {
  const response = await fetch(`${API_BASE_URL}/applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(applicationData),
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to submit membership application.');

    throw new Error(message);
  }

  return response.json();
}

// Retrieve all users.
export async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/users`, {
    credentials: 'include',
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to retrieve users.');
    throw new Error(message);
  }

  return response.json();
}

// Log a user into the application.
export async function loginUser(loginData) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'The email or password is incorrect.');
    throw new Error(message);
  }

  return response.json();
}

// Retrieve the currently authenticated user.
export async function getProfile() {
  const response = await fetch(`${API_BASE_URL}/auth/profile`, {
    credentials: 'include',
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Unable to retrieve the user profile.');
    throw new Error(message);
  }

  return response.json();
}

// Log the current user out of the application.
export async function logoutUser() {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Logout failed.');
    throw new Error(message);
  }

  return response.json();
}

// Retrieve RSVPs belonging to the authenticated member.
export async function getMyRsvps() {
  const response = await fetch(`${API_BASE_URL}/rsvps/mine`, {
    credentials: 'include',
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to retrieve your RSVPs.');

    throw new Error(message);
  }

  return response.json();
}

// Create an RSVP for an event.
export async function createRsvp(rsvpData) {
  const response = await fetch(`${API_BASE_URL}/rsvps`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(rsvpData),
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to create RSVP.');

    throw new Error(message);
  }

  return response.json();
}

// Update an existing RSVP.
export async function updateRsvp(rsvpId, updatedData) {
  const response = await fetch(`${API_BASE_URL}/rsvps/${rsvpId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to update RSVP.');

    throw new Error(message);
  }

  return response.json();
}

// Delete an RSVP.
export async function deleteRsvp(rsvpId) {
  const response = await fetch(`${API_BASE_URL}/rsvps/${rsvpId}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to cancel RSVP.');

    throw new Error(message);
  }

  return response.json();
}

// Retrieve all membership applications for an administrator.
export async function getApplications() {
  const response = await fetch(`${API_BASE_URL}/applications`, {
    credentials: 'include',
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to retrieve membership applications.');

    throw new Error(message);
  }

  return response.json();
}

// Update a membership application.
export async function updateApplication(applicationId, updatedData) {
  const response = await fetch(`${API_BASE_URL}/applications/${applicationId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to update membership application.');

    throw new Error(message);
  }

  return response.json();
}

// Delete an event.
export async function deleteEvent(eventId) {
  const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!response.ok) {
    const message = await getErrorMessage(response, 'Failed to delete event.');

    throw new Error(message);
  }

  return response.json();
}
