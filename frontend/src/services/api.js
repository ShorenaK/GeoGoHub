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
