/*
  middleware/notFound.js

  This file handles requests to routes that do not exist.

  Responsibilities:
  - Catch unmatched API routes.
  - Return a clean 404 JSON response.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

// Handles requests that do not match any route.
export function notFound(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
}
