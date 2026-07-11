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

// Retrieve all events.
export async function getEvents() {
  const response = await fetch(`${API_BASE_URL}/events`);

  if (!response.ok) {
    throw new Error('Failed to retrieve events.');
  }

  return response.json();
}

// Retrieve all users.
export async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/users`, {
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to retrieve users.');
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
    throw new Error('Login failed.');
  }

  return response.json();
}
