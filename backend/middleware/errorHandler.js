/*
  middleware/errorHandler.js

  This file handles unexpected server errors.

  Responsibilities:
  - Catch application errors.
  - Return a consistent JSON error response.
  - Prevent the server from crashing.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

// Handles unexpected server errors.
export function errorHandler(error, req, res, next) {
  console.error(error);

  res.status(500).json({
    success: false,
    message: 'Internal server error.',
    error: error.message,
  });
}
