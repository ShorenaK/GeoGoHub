/* Great job creating two helper functions in the middleware directory to call/import on for unexpected and not found errors to call upon in your data logic functions! 
This eliminates the need to rewrite the sames line of code for error checking regarding server errors. */
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
export function errorHandler(error, req, res, _next) {
  console.error(error);

  res.status(500).json({
    success: false,
    message: 'Internal server error.',
    error: error.message,
  });
}
